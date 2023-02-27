import { Button } from "@mui/material";

const Button3 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "164px",
        left: "65px",
        width: "90px",
        height: "40px",
      }}
    >
      <Button
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0%",
          right: "0%",
          bottom: "0%",
          left: "0%",
        }}
        sx={{ width: 90 }}
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </div>
  );
};

export default Button3;
