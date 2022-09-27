import Card from "@mui/material/Card";

export const Content = ({ data }) => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <Card
            style={{ margin: "0.5rem", width: "100%", padding: "1rem" }}
            key={`card-${i}`}
            variant="outlined"
          >
            {item}
          </Card>
        );
      })}
    </>
  );
};
