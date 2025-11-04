import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
          <div className="relative w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-xl">
            <ApperIcon 
              name="FileQuestion" 
              size={64} 
              className="text-slate-400" 
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-900">
            Page Not Found
          </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            variant="primary"
            size="large"
            onClick={() => navigate("/")}
          >
            <ApperIcon name="Home" size={20} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;