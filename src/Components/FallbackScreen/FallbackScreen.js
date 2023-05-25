import fallback from "./fallback.module.css";

const FallbakScreen = () => {
  return (
    <div className={fallback.container}>
      <h1 className={fallback.error_message}> Oops Something went wrong!!!</h1>
    </div>
  );
};

export default FallbakScreen;
