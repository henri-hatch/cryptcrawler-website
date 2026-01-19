import { Navigate, useParams } from 'react-router-dom';
import CodexTree from '../../components/codex_tree';
import codexDetails from '../../data/codex_detail_data';
import './codex_detail.css';

interface CodexDetailPageProps {
  codexIdOverride?: string;
}

const CodexDetailPage = ({ codexIdOverride }: CodexDetailPageProps) => {
  const { codexId } = useParams();
  const resolvedId = codexIdOverride || codexId;
  const codex = codexDetails.find((entry) => entry.id === resolvedId);

  if (!codex) {
    return <Navigate to="/codices" replace />;
  }

  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>{codex.name}</h2>
        <p>{codex.description}</p>
        {codex.lore && <p className="codex-lore">{codex.lore}</p>}
      </div>

      <CodexTree tiers={codex.tiers} mastery={codex.mastery} />
    </div>
  );
};

export default CodexDetailPage;
