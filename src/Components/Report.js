import { Link } from "react-router-dom";
import Header from "./Header";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import PeopleIcon from "@mui/icons-material/People";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BuildIcon from "@mui/icons-material/Build";

const Report = () => {
  const reportItems = [
    { name: "Inventory", icon: <InventoryIcon />, link: "/report/inventory" },
    { name: "Transaction", icon: <AccountBalanceWalletIcon />, link: "/report/transaction" },
    { name: "Complaint", icon: <ReportProblemIcon />, link: "/report/complaint" },
    { name: "Collection", icon: <AttachMoneyIcon />, link: "/report/collection" },
    { name: "Reconciliation", icon: <CompareArrowsIcon />, link: "/report/reconciliation" },
    { name: "Tenant Detail", icon: <PeopleIcon />, link: "/report/tenant-detail" },
    { name: "Move-in", icon: <ArrowBackIcon />, link: "/report/move-in" },
    { name: "Move-out", icon: <ArrowForwardIcon />, link: "/report/move-out" },
    { name: "Expenses", icon: <BuildIcon />, link: "/report/expenses" },
  ];

  return (
    <div className="container mx-auto bg-white min-h-screen max-w-4xl flex flex-col p-4 font-Montserrat">
      <Header title="Record Payment" />

      {reportItems.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          className="p-4 ml-9 flex items-center mt-2 cursor-pointer border-b border-gray-200"
        >
          <span className="p-3 bg-purple-100 text-[#69205D] rounded-full">{item.icon}</span>
          <p className="ml-4 text-gray-800">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Report;
