import { Button } from "@mui/material";

const Button2 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "298px",
        left: "65px",
        width: "120px",
        height: "60px",
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
        sx={{ width: 120 }}
        variant="outlined"
        color="primary"
      >
        Sign In
      </Button>
    </div>
  );
};

export default Button2;
