const Button6 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "152px",
        left: "226px",
        width: "90px",
        height: "40px",
        textAlign: "center",
        fontSize: "16px",
        color: "#1e0e62",
        fontFamily: "'DM Sans'",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0%",
          right: "0%",
          bottom: "0%",
          left: "0%",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "100px",
            border: "2px solid #ebeaed",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 11px)",
            left: "calc(50% - 25px)",
            lineHeight: "22px",
            fontWeight: "500",
          }}
        >
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Button6;
