import { useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import OrdersPage from './pages/OrdersPage'
import InventoryPage from './pages/InventoryPage'
import SalesPage from './pages/SalesPage'
import CustomerPage from './pages/CustomerPage'
import PurchasePage from './pages/PurchasePage'



function App() {


  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          {/* <Route path="/auth" element={<AuthPage />} /> */}
          <Route
            path="/dashboard"
            element={
              <DashboardPage />
            }
          />
          <Route
            path="/orders"
            element={
              <OrdersPage />
            }
          />
          <Route
            path="/inventory"
            element={
              <InventoryPage />
            }
          />
          <Route
            path="/sales"
            element={
              <SalesPage />
            }
          />
          <Route
            path="/customers"
            element={
              <CustomerPage />
            }
          />
          <Route
            path="/purchase"
            element={
              <PurchasePage />
            }
          />
        </Routes>
        <ToastContainer />
        <Tooltip id="my-tooltip" />
      </Router>
    </AuthProvider>
  )
}

export default App
