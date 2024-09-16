import Card from "./components/Card"; 

const App = () => {
  return (
    <div>
      <Card 
        title="Proyecto A" 
        description="Desarrollo de una aplicación web" 
        assignedTo="Juan Pérez" 
        startDate="2023-09-01" 
        endDate="2023-12-15" 
      />
      <Card 
        title="Proyecto B" 
        description="Investigación de mercado" 
        assignedTo="María Gómez" 
        startDate="2023-08-15" 
        endDate="2023-11-01" 
      />
      <Card 
        title="Proyecto C" 
        description="Diseño de una campaña publicitaria" 
        assignedTo="Carlos Sánchez" 
        startDate="2023-10-01" 
        endDate="2024-01-15" 
      />
    </div>
  );
};

export default App;
