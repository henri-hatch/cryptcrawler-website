interface ManeuverData {
  id: string;
  name: string;
  description: string;
  maneuverImage: string;
  category: string[];
}

const maneuverData: ManeuverData[] = [
  {
    id: "flurry-of-blows",
    name: "Flurry of Blows",
    description: "With a blur of motion you are able to land multiple unarmed blows in rapid succession.",
    maneuverImage: "/manuever-images/Flurry of Blows.png",
    category: ["maneuver"]
  },
];

export default maneuverData;