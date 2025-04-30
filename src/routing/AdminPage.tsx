import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import MenuEditor from "../components/MenuEditor";
import { useEffect } from "react";

const AdminPage = () => {
  const navigate = useNavigate();

  // Authentication guard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return <MenuEditor />;
};

export default AdminPage;
