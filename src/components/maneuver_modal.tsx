import React, { useState, createContext, useContext, ReactNode } from 'react';
import './maneuver_modal.css';

// Interface for the Maneuver object
interface Maneuver {
  id: string;
  name: string;
  description: string;
  maneuverImage: string;
  category?: string[];
}

// Context to manage the modal state globally
interface ManeuverModalContextType {
  openModal: (maneuver: Maneuver) => void;
  closeModal: () => void;
}

const ManeuverModalContext = createContext<ManeuverModalContextType | undefined>(undefined);

// Provider component that will wrap the application
export const ManeuverModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedManeuver, setSelectedManeuver] = useState<Maneuver | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const openModal = (maneuver: Maneuver) => {
    setSelectedManeuver(maneuver);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Function to copy maneuver image to clipboard
  const copyManeuverToClipboard = async (imageUrl: string) => {
    try {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      // Wait for the image to load
      await new Promise<void>((resolve) => {
        img.onload = () => {
          // Set canvas dimensions to match the image
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw the image on the canvas
          ctx?.drawImage(img, 0, 0);
          resolve();
        };
        img.crossOrigin = "anonymous"; // This is important for CORS issues
        img.src = imageUrl;
      });
      
      // Convert canvas to blob and copy to clipboard
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            // Modern clipboard API
            await navigator.clipboard.write([
              new ClipboardItem({
                [blob.type]: blob
              })
            ]);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
          } catch (err) {
            console.error('Failed to copy image: ', err);
          }
        }
      });
    } catch (err) {
      console.error('Error copying to clipboard: ', err);
    }
  };

  return (
    <ManeuverModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {/* The actual modal component */}
      {showModal && selectedManeuver && (
        <div className="maneuver-modal-backdrop" onClick={closeModal}>
          <div className="maneuver-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="maneuver-modal-header">
              <h2>{selectedManeuver.name}</h2>
              <button className="modal-close-button" onClick={closeModal}>×</button>
            </div>
            
            <div className="maneuver-modal-body">
              <div className="maneuver-modal-image">
                <img 
                  src={selectedManeuver.maneuverImage} 
                  alt={selectedManeuver.name} 
                  style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                  title="Click to copy to clipboard"
                  onClick={() => copyManeuverToClipboard(selectedManeuver.maneuverImage)}
                />
                {copySuccess && <p className="copy-success">Copied to clipboard!</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </ManeuverModalContext.Provider>
  );
};

// Custom hook to use the maneuver modal context
export const useManeuverModal = () => {
  const context = useContext(ManeuverModalContext);
  if (context === undefined) {
    throw new Error('useManeuverModal must be used within a ManeuverModalProvider');
  }
  return context;
};

// Component to display a clickable maneuver text link
export const ManeuverLink: React.FC<{ maneuver: Maneuver }> = ({ maneuver }) => {
  const { openModal } = useManeuverModal();
  
  return (
    <span 
      className="maneuver-link"
      onClick={() => openModal(maneuver)}
    >
      {maneuver.name}
    </span>
  );
};

export default ManeuverModalProvider;