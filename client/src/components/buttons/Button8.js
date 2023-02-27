const Button8 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "298px",
        left: "439px",
        width: "120px",
        height: "60px",
        textAlign: "center",
        fontSize: "20px",
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
            top: "calc(50% - 13px)",
            left: "calc(50% - 31px)",
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

export default Button8;
