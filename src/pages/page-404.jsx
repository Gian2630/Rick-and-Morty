import { Button, Empty } from "keep-react";
import { useLocation } from "wouter";

export const Page404 = () => {
  const [, navigate] = useLocation();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="page-404">
    <Empty>
      <Empty.Image>
        <img
          src='\public\error404.png'
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>404 Not Found</Empty.Title>
      <Empty.Description>
        La pagina no existe.
      </Empty.Description>
      <Button variant="outline" onClick={handleClick}>
        Volver al inicio
      </Button>
    </Empty>
    </div>
  );
};
