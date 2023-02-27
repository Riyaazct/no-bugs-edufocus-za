import { Button } from "@mui/material";

const Button1 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "226px",
        left: "65px",
        width: "100px",
        height: "50px",
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
          'border-Radius': "100px!important",
          border: "2px solid #fff",
          'box-sizing': "border-box"
        }}
        sx={{ width: 100 }}
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </div>
  );
};

export default Button1;
