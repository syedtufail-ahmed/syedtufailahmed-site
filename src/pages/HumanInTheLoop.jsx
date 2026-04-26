import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function HumanInTheLoop() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/writing/human-in-the-loop-ai-governance", { replace: true });
  }, [navigate]);

  return (
    <Helmet>
      <link rel="canonical" href="https://www.syedtufailahmed.com/writing/human-in-the-loop-ai-governance" />
    </Helmet>
  );
}
