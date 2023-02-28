const Button7 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "226px",
        left: "439px",
        width: "100px",
        height: "50px",
        textAlign: "center",
        fontSize: "18px",
        color: "#fff",
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
            border: "2px solid #fff",
            boxSizing: "border-box",
            opacity: "0.3",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            left: "calc(50% - 28px)",
            lineHeight: "26px",
            fontWeight: "500",
          }}
        >
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Button7;
