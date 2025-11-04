import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";

const DeleteConfirmation = ({ isOpen, onClose, onConfirm, taskTitle, loading }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Task"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
            <ApperIcon name="AlertTriangle" size={20} className="text-error" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">
              Are you sure you want to delete this task?
            </p>
            <p className="text-xs text-slate-600 mt-1">
              This action cannot be undone.
            </p>
          </div>
        </div>

        {taskTitle && (
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 font-medium line-clamp-2">
              "{taskTitle}"
            </p>
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <Button
            variant="danger"
            onClick={onConfirm}
            className="flex-1"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Task"}
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmation;