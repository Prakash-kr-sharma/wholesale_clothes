import React, { useState } from 'react';
import { 
  LayoutDashboard, ShoppingCart, Truck, Users, Package, 
  ArrowUpRight, TrendingUp, AlertTriangle, Search, Plus, 
  Filter, LogOut, ShieldCheck, Eye, Check, X, FileText, 
  DollarSign, Calendar, MapPin, Building, RefreshCw, 
  Phone, Mail, ArrowLeft, ArrowDownRight, Layers
} from 'lucide-react';
import { 
  INITIAL_ADMIN_METRICS, 
  INITIAL_SALES_ORDERS, 
  INITIAL_BUY_PROCUREMENT, 
  INITIAL_EMPLOYEES, 
  INITIAL_INVENTORY,
  OCCASION_SALES_DISTRIBUTION 
} from '../data/adminMockData';

export default function AdminDashboard({ onLogout, onReturnToStore }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'sales' | 'buy' | 'employees' | 'inventory'
  
  // Data states so user can interactively add/update
  const [salesOrders, setSalesOrders] = useState(INITIAL_SALES_ORDERS);
  const [procurements, setProcurements] = useState(INITIAL_BUY_PROCUREMENT);
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);

  // Search & Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOccasion, setFilterOccasion] = useState('all');

  // Modals for adding records
  const [showAddSaleModal, setShowAddSaleModal] = useState(false);
  const [showAddProcurementModal, setShowAddProcurementModal] = useState(false);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Forms states
  const [newSale, setNewSale] = useState({
    retailerName: '',
    contactPerson: '',
    city: '',
    occasion: 'wedding',
    itemsSummary: '',
    totalPieces: 50,
    orderValue: 75000,
    paymentStatus: 'Paid (NEFT)',
    dispatchStatus: 'Packing & Quality Check',
    carrier: 'SafeExpress'
  });

  const [newProcurement, setNewProcurement] = useState({
    vendorName: '',
    material: '',
    quantity: '1,000 Meters',
    purpose: '',
    unitCost: 200,
    totalCost: 200000,
    status: 'In Transit',
    destinationHub: 'Surat Central Mill Hub'
  });

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    department: 'Wholesale Sales',
    location: 'Surat Central Mill Hub',
    phone: '',
    email: '',
    monthlySalary: 45000,
    shift: 'Regular (09:30 - 18:30)',
    status: 'Active'
  });

  // Calculate dynamic live metrics
  const totalSalesRevenue = salesOrders.reduce((sum, order) => sum + order.orderValue, 0);
  const totalProcurementExpense = procurements.reduce((sum, p) => sum + p.totalCost, 0);
  const totalMonthlyPayroll = employees.reduce((sum, emp) => sum + emp.monthlySalary, 0);
  const totalStockPieces = inventory.reduce((sum, item) => sum + item.stockPieces, 0);

  // Add Sale Handler
  const handleAddSale = (e) => {
    e.preventDefault();
    const id = `ORD-${9400 + salesOrders.length + 1}`;
    const invoiceNo = `TH-INV-2026-${890 + salesOrders.length + 1}`;
    const orderDate = new Date().toISOString().split('T')[0];
    
    setSalesOrders([
      { id, invoiceNo, orderDate, ...newSale, totalPieces: Number(newSale.totalPieces), orderValue: Number(newSale.orderValue) },
      ...salesOrders
    ]);
    setShowAddSaleModal(false);
    setNewSale({
      retailerName: '',
      contactPerson: '',
      city: '',
      occasion: 'wedding',
      itemsSummary: '',
      totalPieces: 50,
      orderValue: 75000,
      paymentStatus: 'Paid (NEFT)',
      dispatchStatus: 'Packing & Quality Check',
      carrier: 'SafeExpress'
    });
  };

  // Add Procurement Handler
  const handleAddProcurement = (e) => {
    e.preventDefault();
    const id = `BUY-${500 + procurements.length + 1}`;
    const deliveryDate = new Date().toISOString().split('T')[0];
    
    setProcurements([
      { id, deliveryDate, ...newProcurement, unitCost: Number(newProcurement.unitCost), totalCost: Number(newProcurement.totalCost) },
      ...procurements
    ]);
    setShowAddProcurementModal(false);
    setNewProcurement({
      vendorName: '',
      material: '',
      quantity: '1,000 Meters',
      purpose: '',
      unitCost: 200,
      totalCost: 200000,
      status: 'In Transit',
      destinationHub: 'Surat Central Mill Hub'
    });
  };

  // Add Employee Handler
  const handleAddEmployee = (e) => {
    e.preventDefault();
    const id = `EMP-0${employees.length + 1}`;
    const joinedDate = new Date().toISOString().split('T')[0];

    setEmployees([
      ...employees,
      { id, joinedDate, ...newEmployee, monthlySalary: Number(newEmployee.monthlySalary) }
    ]);
    setShowAddEmployeeModal(false);
    setNewEmployee({
      name: '',
      role: '',
      department: 'Wholesale Sales',
      location: 'Surat Central Mill Hub',
      phone: '',
      email: '',
      monthlySalary: 45000,
      shift: 'Regular (09:30 - 18:30)',
      status: 'Active'
    });
  };

  // Update Inventory Stock
  const handleRestock = (invId, addPieces) => {
    setInventory(prev => prev.map(item => {
      if (item.id === invId) {
        const newPieces = item.stockPieces + addPieces;
        return {
          ...item,
          stockPieces: newPieces,
          status: newPieces > item.reorderLevel ? 'Adequate Stock' : 'Low Stock Alert'
        };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans flex flex-col">
      {/* Top Admin Header Bar */}
      <header className="sticky top-0 z-30 bg-neutral-900/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-black font-black text-lg">
            TH
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black tracking-tight text-white">
                THREAD<span className="text-orange-500">HUB</span>
              </span>
              <span className="rounded-full bg-orange-500/20 text-orange-400 text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider border border-orange-500/30">
                ERP Command Center
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 hidden sm:block">
              Surat Mills • Delhi Showroom • Tirupur Factory
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReturnToStore}
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Return to</span> Storefront
          </button>

          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/10 text-xs">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300 font-semibold">Store Manager (Admin)</span>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/10 hover:bg-red-500 hover:text-black px-3.5 py-1.5 text-xs font-bold text-red-400 transition"
            aria-label="Logout"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Body with Sidebar & Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Navigation Sidebar */}
        <aside className="w-full lg:w-64 bg-neutral-900/60 border-b lg:border-b-0 lg:border-r border-white/10 p-4 shrink-0">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                activeTab === 'overview'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className="h-4 w-4" />
                <span>Executive Overview</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                activeTab === 'overview' ? 'bg-black/20 text-black' : 'text-neutral-500'
              }`}>KPIs</span>
            </button>

            <button
              onClick={() => setActiveTab('sales')}
              className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                activeTab === 'sales'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="h-4 w-4" />
                <span>Wholesale Sales</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                activeTab === 'sales' ? 'bg-black/20 text-black' : 'bg-neutral-800 text-orange-400'
              }`}>{salesOrders.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('buy')}
              className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                activeTab === 'buy'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Truck className="h-4 w-4" />
                <span>Buy & Procurement</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                activeTab === 'buy' ? 'bg-black/20 text-black' : 'bg-neutral-800 text-emerald-400'
              }`}>{procurements.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('employees')}
              className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                activeTab === 'employees'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="h-4 w-4" />
                <span>Store & Mill Staff</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                activeTab === 'employees' ? 'bg-black/20 text-black' : 'bg-neutral-800 text-neutral-400'
              }`}>{employees.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('inventory')}
              className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                activeTab === 'inventory'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Package className="h-4 w-4" />
                <span>Occasion Stock</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                activeTab === 'inventory' ? 'bg-black/20 text-black' : 'bg-amber-500/20 text-amber-400'
              }`}>Alerts</span>
            </button>
          </div>

          {/* Quick Hub Status Widget */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-950 p-3.5 text-xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
              Active Production Units
            </span>
            <div className="flex items-center justify-between text-neutral-400">
              <span>Surat Spinning Hub:</span>
              <span className="text-emerald-400 font-bold">100% Operational</span>
            </div>
            <div className="flex items-center justify-between text-neutral-400">
              <span>Tirupur Knitwear:</span>
              <span className="text-emerald-400 font-bold">Knitting 240 GSM</span>
            </div>
            <div className="flex items-center justify-between text-neutral-400">
              <span>Delhi Trade Showroom:</span>
              <span className="text-white font-bold">Open for B2B</span>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          {/* TAB 1: EXECUTIVE OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Wholesale Operations Dashboard
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Real-time synchronization of customer orders, mill fabric procurement, payroll, and stock levels.
                </p>
              </div>

              {/* 4 Top KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Total Wholesale Sales</span>
                    <span className="text-emerald-400 font-bold flex items-center">
                      <ArrowUpRight className="h-3.5 w-3.5" /> +18.4%
                    </span>
                  </div>
                  <div className="mt-2 text-2xl sm:text-3xl font-black text-white">
                    ₹{totalSalesRevenue.toLocaleString('en-IN')}
                  </div>
                  <p className="mt-1 text-[11px] text-neutral-500">
                    {salesOrders.length} bulk consignments invoiced
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Total Procurement (Buy)</span>
                    <span className="text-orange-400 font-bold flex items-center">
                      5 Mills
                    </span>
                  </div>
                  <div className="mt-2 text-2xl sm:text-3xl font-black text-orange-400">
                    ₹{totalProcurementExpense.toLocaleString('en-IN')}
                  </div>
                  <p className="mt-1 text-[11px] text-neutral-500">
                    Raw silk, Giza cotton & combed yarn
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Active Store Staff</span>
                    <span className="text-blue-400 font-bold">3 Locations</span>
                  </div>
                  <div className="mt-2 text-2xl sm:text-3xl font-black text-white">
                    {employees.length} <span className="text-sm font-normal text-neutral-400">Staff</span>
                  </div>
                  <p className="mt-1 text-[11px] text-neutral-500">
                    Monthly Payroll: ₹{totalMonthlyPayroll.toLocaleString('en-IN')}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Garment Inventory</span>
                    <span className="text-emerald-400 font-bold">Adequate</span>
                  </div>
                  <div className="mt-2 text-2xl sm:text-3xl font-black text-white">
                    {totalStockPieces.toLocaleString('en-IN')} <span className="text-sm font-normal text-neutral-400">Pcs</span>
                  </div>
                  <p className="mt-1 text-[11px] text-neutral-500">
                    Across 8 Occasion categories
                  </p>
                </div>
              </div>

              {/* Middle Section: Occasion Revenue Share & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Occasion Sales Distribution (7 cols) */}
                <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-neutral-900/80 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Occasion Revenue Distribution
                    </h3>
                    <span className="text-xs text-orange-400 font-semibold">September 2026</span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-6">
                    Breakdown of wholesale revenue by customer occasion demand. Wedding and Festive lead during Q3 festival ramp-up.
                  </p>

                  <div className="space-y-4">
                    {OCCASION_SALES_DISTRIBUTION.map((occ, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-neutral-200">{occ.occasion}</span>
                          <span className="text-neutral-400 font-mono">
                            ₹{occ.revenue.toLocaleString('en-IN')} ({occ.percentage}%)
                          </span>
                        </div>
                        <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${occ.percentage}%`, backgroundColor: occ.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Urgent Operational Alerts (5 cols) */}
                <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-neutral-900/80 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-400" /> Operational Action Center
                    </h3>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-neutral-300">
                        <p className="font-bold text-amber-400">Low Stock Alert: Liquid Satin Slip Dresses</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">Current stock: 85 pcs (Reorder trigger: 120 pcs). Party season surge expected.</p>
                      </div>

                      <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-neutral-300">
                        <p className="font-bold text-blue-400">Incoming Mill Consignment</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">5,200 Kg combed yarn arriving at Tirupur Unit from Tirupur Mills.</p>
                      </div>

                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-neutral-300">
                        <p className="font-bold text-emerald-400">Bulk Consignment Dispatched</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">Singhania Menswear (100 pcs sherwanis/tuxedos) handed over to SafeExpress.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-6 flex gap-2">
                    <button
                      onClick={() => setActiveTab('sales')}
                      className="flex-1 rounded-xl bg-orange-500 hover:bg-orange-400 py-2.5 text-xs font-bold text-black text-center transition"
                    >
                      View All Consignments
                    </button>
                    <button
                      onClick={() => setActiveTab('inventory')}
                      className="flex-1 rounded-xl border border-white/20 hover:border-white py-2.5 text-xs font-semibold text-white text-center transition"
                    >
                      Manage Stock
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: WHOLESALE SALES ORDERS */}
          {activeTab === 'sales' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-white">Wholesale Sales & Consignments</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">Manage store shipments, B2B invoices, and payment tracking.</p>
                </div>
                <button
                  onClick={() => setShowAddSaleModal(true)}
                  className="flex items-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 px-4 py-2.5 text-xs font-black text-black transition cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="h-4 w-4" /> Record New B2B Sale
                </button>
              </div>

              {/* Filter and search bar */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search retailer, city, or invoice #..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-xl bg-neutral-950 border border-white/10 pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs text-neutral-400">Filter Occasion:</span>
                  <select
                    value={filterOccasion}
                    onChange={(e) => setFilterOccasion(e.target.value)}
                    className="rounded-xl bg-neutral-950 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="all">All Occasions</option>
                    <option value="wedding">Wedding</option>
                    <option value="festive">Festive</option>
                    <option value="corporate">Corporate</option>
                    <option value="casual">Casual</option>
                    <option value="party">Party</option>
                  </select>
                </div>
              </div>

              {/* Sales Table */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-neutral-300">
                    <thead className="bg-neutral-950 text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-white/10">
                      <tr>
                        <th className="p-4">Order ID & Invoice</th>
                        <th className="p-4">Retailer & City</th>
                        <th className="p-4">Occasion & Items</th>
                        <th className="p-4">Pieces</th>
                        <th className="p-4">Order Value</th>
                        <th className="p-4">Payment</th>
                        <th className="p-4">Dispatch Status</th>
                        <th className="p-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-normal">
                      {salesOrders
                        .filter(o => 
                          (filterOccasion === 'all' || o.occasion === filterOccasion) &&
                          (!searchTerm || o.retailerName.toLowerCase().includes(searchTerm.toLowerCase()) || o.city.toLowerCase().includes(searchTerm.toLowerCase()) || o.invoiceNo.toLowerCase().includes(searchTerm.toLowerCase()))
                        )
                        .map((order) => (
                          <tr key={order.id} className="hover:bg-white/[0.02] transition">
                            <td className="p-4">
                              <span className="font-mono font-bold text-white">{order.id}</span>
                              <span className="block text-[11px] text-neutral-500">{order.invoiceNo}</span>
                            </td>
                            <td className="p-4">
                              <span className="font-bold text-white block">{order.retailerName}</span>
                              <span className="text-[11px] text-neutral-400">{order.contactPerson} • {order.city}</span>
                            </td>
                            <td className="p-4">
                              <span className="inline-block rounded-md bg-orange-500/10 text-orange-400 px-2 py-0.5 text-[10px] font-bold uppercase mb-1">
                                {order.occasion}
                              </span>
                              <span className="block text-neutral-400 line-clamp-1 text-[11px]">{order.itemsSummary}</span>
                            </td>
                            <td className="p-4 font-mono font-bold text-white">
                              {order.totalPieces} pcs
                            </td>
                            <td className="p-4 font-mono font-bold text-emerald-400 text-sm">
                              ₹{order.orderValue.toLocaleString('en-IN')}
                            </td>
                            <td className="p-4">
                              <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                order.paymentStatus.includes('Paid')
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              }`}>
                                {order.paymentStatus}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className="text-neutral-200 block font-medium">{order.dispatchStatus}</span>
                              <span className="text-[10px] text-neutral-500">{order.carrier}</span>
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => setSelectedInvoice(order)}
                                className="inline-flex items-center gap-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 px-2.5 py-1 text-[11px] font-semibold text-white transition"
                              >
                                <Eye className="h-3 w-3" /> View Invoice
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BUY & PROCUREMENT DATA */}
          {activeTab === 'buy' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-white">Mill Fabric & Raw Material Procurement</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">Tracking yarn, spinning mills, imported fabrics, and trim purchasing.</p>
                </div>
                <button
                  onClick={() => setShowAddProcurementModal(true)}
                  className="flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-xs font-black text-black transition cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="h-4 w-4" /> Record New Procurement
                </button>
              </div>

              {/* Procurement Summary Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                  <span className="text-xs text-neutral-400">Total Procurement Expenditure:</span>
                  <p className="text-2xl font-black text-white mt-1">₹{totalProcurementExpense.toLocaleString('en-IN')}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                  <span className="text-xs text-neutral-400">Yarn & Fabric On Order:</span>
                  <p className="text-2xl font-black text-orange-400 mt-1">14,500 Meters / Units</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                  <span className="text-xs text-neutral-400">Primary Sourcing Hubs:</span>
                  <p className="text-2xl font-black text-emerald-400 mt-1">Surat & Tirupur</p>
                </div>
              </div>

              {/* Procurement Table */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-neutral-300">
                    <thead className="bg-neutral-950 text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-white/10">
                      <tr>
                        <th className="p-4">Consignment ID</th>
                        <th className="p-4">Mill / Vendor</th>
                        <th className="p-4">Material & Fabric</th>
                        <th className="p-4">Quantity</th>
                        <th className="p-4">Unit Rate</th>
                        <th className="p-4">Total Cost</th>
                        <th className="p-4">Destination Hub</th>
                        <th className="p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-normal">
                      {procurements.map((item) => (
                        <tr key={item.id} className="hover:bg-white/[0.02] transition">
                          <td className="p-4 font-mono font-bold text-white">{item.id}</td>
                          <td className="p-4 font-bold text-white">{item.vendorName}</td>
                          <td className="p-4">
                            <span className="font-semibold text-neutral-200 block">{item.material}</span>
                            <span className="text-[11px] text-neutral-500">{item.purpose}</span>
                          </td>
                          <td className="p-4 font-mono text-neutral-200">{item.quantity}</td>
                          <td className="p-4 font-mono text-neutral-400">₹{item.unitCost}</td>
                          <td className="p-4 font-mono font-bold text-orange-400 text-sm">
                            ₹{item.totalCost.toLocaleString('en-IN')}
                          </td>
                          <td className="p-4 text-neutral-300">{item.destinationHub}</td>
                          <td className="p-4">
                            <span className="inline-block rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: STORE & MILL EMPLOYEES */}
          {activeTab === 'employees' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-white">Store & Factory Employee Directory</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">Staff roles, department assignments, shifts, and payroll records.</p>
                </div>
                <button
                  onClick={() => setShowAddEmployeeModal(true)}
                  className="flex items-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 px-4 py-2.5 text-xs font-black text-black transition cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="h-4 w-4" /> Add New Staff Member
                </button>
              </div>

              {/* Payroll & Staff Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                  <span className="text-xs text-neutral-400">Total Active Staff:</span>
                  <p className="text-2xl font-black text-white mt-1">{employees.length} Members</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                  <span className="text-xs text-neutral-400">Total Monthly Payroll:</span>
                  <p className="text-2xl font-black text-emerald-400 mt-1">₹{totalMonthlyPayroll.toLocaleString('en-IN')}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                  <span className="text-xs text-neutral-400">Locations Covered:</span>
                  <p className="text-2xl font-black text-orange-400 mt-1">Surat, Delhi & Tirupur</p>
                </div>
              </div>

              {/* Employee Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {employees.map((emp) => (
                  <div
                    key={emp.id}
                    className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6 flex flex-col justify-between hover:border-orange-500/40 transition duration-300"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="font-mono text-[10px] text-neutral-500 uppercase">{emp.id}</span>
                          <h3 className="text-lg font-black text-white">{emp.name}</h3>
                          <p className="text-xs font-semibold text-orange-400 mt-0.5">{emp.role}</p>
                        </div>
                        <span className="rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 border border-emerald-500/30">
                          {emp.status}
                        </span>
                      </div>

                      <div className="mt-4 space-y-2 text-xs text-neutral-300">
                        <div className="flex items-center gap-2">
                          <Building className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
                          <span>{emp.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                          <span className="truncate">{emp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span className="font-mono">{emp.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                          <span className="truncate">{emp.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-neutral-500">Monthly Compensation:</span>
                        <p className="font-mono font-bold text-white text-sm">₹{emp.monthlySalary.toLocaleString('en-IN')}</p>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono">Shift: {emp.shift.split(' ')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INVENTORY & OCCASION STOCK */}
          {activeTab === 'inventory' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-white">Occasion Garment Stock & Reorder Levels</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">Real-time carton inventory, warehouse locations, and reorder alerts.</p>
                </div>
                <div className="rounded-full bg-orange-500/20 text-orange-400 px-3.5 py-1 text-xs font-bold border border-orange-500/30">
                  Total Garments: {totalStockPieces.toLocaleString('en-IN')} pcs
                </div>
              </div>

              {/* Stock Table */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-neutral-300">
                    <thead className="bg-neutral-950 text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-white/10">
                      <tr>
                        <th className="p-4">SKU / Item</th>
                        <th className="p-4">Occasion</th>
                        <th className="p-4">In-Stock Pieces</th>
                        <th className="p-4">Reorder Trigger</th>
                        <th className="p-4">Cost vs Wholesale</th>
                        <th className="p-4">Storage Bay</th>
                        <th className="p-4">Stock Status</th>
                        <th className="p-4 text-right">Quick Restock</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-normal">
                      {inventory.map((inv) => (
                        <tr key={inv.id} className="hover:bg-white/[0.02] transition">
                          <td className="p-4 font-bold text-white">
                            {inv.productName}
                            <span className="block font-mono text-[10px] text-neutral-500">{inv.id}</span>
                          </td>
                          <td className="p-4">
                            <span className="inline-block rounded-md bg-white/5 text-neutral-300 px-2 py-0.5 text-[10px] font-bold uppercase">
                              {inv.occasion}
                            </span>
                          </td>
                          <td className="p-4 font-mono font-black text-white text-base">
                            {inv.stockPieces} <span className="text-xs font-normal text-neutral-400">pcs</span>
                          </td>
                          <td className="p-4 font-mono text-neutral-400">
                            {inv.reorderLevel} pcs
                          </td>
                          <td className="p-4">
                            <span className="text-neutral-400 font-mono text-[11px]">Cost: ₹{inv.unitCost}</span>
                            <span className="block text-emerald-400 font-mono font-bold">Sell: ₹{inv.unitWholesalePrice}</span>
                          </td>
                          <td className="p-4 text-neutral-300 font-mono text-[11px]">{inv.location}</td>
                          <td className="p-4">
                            <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                              inv.status.includes('Low')
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse'
                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}>
                              {inv.status}
                            </span>
                          </td>
                          <td className="p-4 text-right space-x-1.5">
                            <button
                              onClick={() => handleRestock(inv.id, 50)}
                              className="rounded-lg bg-orange-500/10 hover:bg-orange-500 hover:text-black border border-orange-500/30 px-2 py-1 text-[11px] font-bold text-orange-400 transition"
                            >
                              +50 Pcs
                            </button>
                            <button
                              onClick={() => handleRestock(inv.id, 200)}
                              className="rounded-lg bg-emerald-500/10 hover:bg-emerald-500 hover:text-black border border-emerald-500/30 px-2 py-1 text-[11px] font-bold text-emerald-400 transition"
                            >
                              +200 Pcs
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* MODAL 1: ADD NEW B2B SALE */}
      {showAddSaleModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 flex items-center justify-center">
          <div onClick={() => setShowAddSaleModal(false)} className="fixed inset-0 bg-black/85 backdrop-blur-md" />
          <div className="relative w-full max-w-lg bg-neutral-950 border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 z-10 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowAddSaleModal(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-xl font-black text-white">Record New Wholesale Sale</h3>
            <p className="text-xs text-neutral-400 mt-1">Add a new retailer consignment and invoice to the sales ledger.</p>

            <form onSubmit={handleAddSale} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Retail Store / Buyer Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Heritage Clothiers"
                  value={newSale.retailerName}
                  onChange={(e) => setNewSale({ ...newSale, retailerName: e.target.value })}
                  className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Contact Person</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Kapoor"
                    value={newSale.contactPerson}
                    onChange={(e) => setNewSale({ ...newSale, contactPerson: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">City & State</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={newSale.city}
                    onChange={(e) => setNewSale({ ...newSale, city: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Occasion</label>
                  <select
                    value={newSale.occasion}
                    onChange={(e) => setNewSale({ ...newSale, occasion: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="wedding">Wedding</option>
                    <option value="festive">Festive</option>
                    <option value="corporate">Corporate</option>
                    <option value="casual">Casual</option>
                    <option value="party">Party</option>
                    <option value="athleisure">Athleisure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Total Pieces</label>
                  <input
                    type="number"
                    min="10"
                    value={newSale.totalPieces}
                    onChange={(e) => setNewSale({ ...newSale, totalPieces: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Items Summary</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 50x Heavy Embroidered Velvet Sherwanis"
                  value={newSale.itemsSummary}
                  onChange={(e) => setNewSale({ ...newSale, itemsSummary: e.target.value })}
                  className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Order Value (₹)</label>
                  <input
                    type="number"
                    required
                    value={newSale.orderValue}
                    onChange={(e) => setNewSale({ ...newSale, orderValue: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Payment Status</label>
                  <select
                    value={newSale.paymentStatus}
                    onChange={(e) => setNewSale({ ...newSale, paymentStatus: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="Paid (NEFT)">Paid (NEFT)</option>
                    <option value="Paid (UPI)">Paid (UPI)</option>
                    <option value="Paid (RTGS)">Paid (RTGS)</option>
                    <option value="Partial (50% Advance)">Partial (50% Advance)</option>
                    <option value="30-Day Credit (Active)">30-Day Credit (Active)</option>
                    <option value="Pending Approval">Pending Approval</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-orange-500 hover:bg-orange-400 py-3 text-xs font-black text-black transition mt-4 cursor-pointer"
              >
                Save & Generate Wholesale Consignment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD NEW PROCUREMENT */}
      {showAddProcurementModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 flex items-center justify-center">
          <div onClick={() => setShowAddProcurementModal(false)} className="fixed inset-0 bg-black/85 backdrop-blur-md" />
          <div className="relative w-full max-w-lg bg-neutral-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 z-10 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowAddProcurementModal(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-xl font-black text-white">Record Mill Procurement (Buy)</h3>
            <p className="text-xs text-neutral-400 mt-1">Record raw fabric, yarn, and trim purchasing orders from partner mills.</p>

            <form onSubmit={handleAddProcurement} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Mill / Vendor Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Surat Synthetic Mills Ltd"
                  value={newProcurement.vendorName}
                  onChange={(e) => setNewProcurement({ ...newProcurement, vendorName: e.target.value })}
                  className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Material / Fabric</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 240 GSM Super-Combed Cotton"
                    value={newProcurement.material}
                    onChange={(e) => setNewProcurement({ ...newProcurement, material: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Quantity</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2,500 Meters"
                    value={newProcurement.quantity}
                    onChange={(e) => setNewProcurement({ ...newProcurement, quantity: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Total Procurement Cost (₹)</label>
                  <input
                    type="number"
                    required
                    value={newProcurement.totalCost}
                    onChange={(e) => setNewProcurement({ ...newProcurement, totalCost: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Destination Hub</label>
                  <select
                    value={newProcurement.destinationHub}
                    onChange={(e) => setNewProcurement({ ...newProcurement, destinationHub: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="Surat Central Mill Hub">Surat Central Mill Hub</option>
                    <option value="Delhi NCR Trade Center">Delhi NCR Trade Center</option>
                    <option value="Tirupur Knitwear Factory">Tirupur Knitwear Factory</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3 text-xs font-black text-black transition mt-4 cursor-pointer"
              >
                Log Procurement Record
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: ADD NEW EMPLOYEE */}
      {showAddEmployeeModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 flex items-center justify-center">
          <div onClick={() => setShowAddEmployeeModal(false)} className="fixed inset-0 bg-black/85 backdrop-blur-md" />
          <div className="relative w-full max-w-lg bg-neutral-950 border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 z-10 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowAddEmployeeModal(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-xl font-black text-white">Add New Store or Mill Staff</h3>
            <p className="text-xs text-neutral-400 mt-1">Register a new team member to store operations or factory dispatch.</p>

            <form onSubmit={handleAddEmployee} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra"
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                  className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Designation / Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Master Tailor"
                    value={newEmployee.role}
                    onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Department</label>
                  <select
                    value={newEmployee.department}
                    onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="Wholesale Sales & Retailers">Wholesale Sales & Retailers</option>
                    <option value="Logistics & Transport">Logistics & Transport</option>
                    <option value="Fabric Manufacturing">Fabric Manufacturing</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="Warehouse Management">Warehouse Management</option>
                    <option value="Tailoring & Fit Grading">Tailoring & Fit Grading</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Store / Hub Location</label>
                  <select
                    value={newEmployee.location}
                    onChange={(e) => setNewEmployee({ ...newEmployee, location: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="Surat Central Mill Hub">Surat Central Mill Hub</option>
                    <option value="Delhi NCR Showroom">Delhi NCR Showroom</option>
                    <option value="Tirupur Knitwear Factory">Tirupur Knitwear Factory</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Monthly Salary (₹)</label>
                  <input
                    type="number"
                    required
                    value={newEmployee.monthlySalary}
                    onChange={(e) => setNewEmployee({ ...newEmployee, monthlySalary: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={newEmployee.phone}
                    onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="emp@threadhub.com"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-orange-500 hover:bg-orange-400 py-3 text-xs font-black text-black transition mt-4 cursor-pointer"
              >
                Register Staff Member
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: VIEW INVOICE */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 flex items-center justify-center">
          <div onClick={() => setSelectedInvoice(null)} className="fixed inset-0 bg-black/85 backdrop-blur-md" />
          <div className="relative w-full max-w-xl bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 z-10 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedInvoice(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Printable Invoice Header */}
            <div className="border-b border-white/10 pb-4 mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-black text-white">Commercial Wholesale Tax Invoice</h3>
                <p className="text-xs text-orange-400 font-mono mt-0.5">{selectedInvoice.invoiceNo}</p>
              </div>
              <span className="rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 border border-emerald-500/30">
                {selectedInvoice.paymentStatus}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs mb-4">
              <div>
                <span className="text-neutral-500 font-bold uppercase text-[10px]">Billed To (Retailer):</span>
                <p className="font-bold text-white mt-0.5">{selectedInvoice.retailerName}</p>
                <p className="text-neutral-400">{selectedInvoice.contactPerson}</p>
                <p className="text-neutral-400">{selectedInvoice.city}</p>
              </div>
              <div className="text-right">
                <span className="text-neutral-500 font-bold uppercase text-[10px]">Issuer (Manufacturer):</span>
                <p className="font-bold text-white mt-0.5">THREADHUB Wholesale Co.</p>
                <p className="text-neutral-400">GSTIN: 24AAACT1984Q1Z8</p>
                <p className="text-neutral-400">Surat Mill Hub, Gujarat</p>
              </div>
            </div>

            <div className="rounded-2xl bg-neutral-900 p-4 space-y-2 text-xs mb-4">
              <div className="flex justify-between text-neutral-400">
                <span>Occasion Collection:</span>
                <strong className="text-white uppercase">{selectedInvoice.occasion}</strong>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Consignment Details:</span>
                <strong className="text-white">{selectedInvoice.itemsSummary}</strong>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Total Pieces:</span>
                <strong className="text-white">{selectedInvoice.totalPieces} pcs</strong>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Transport Carrier:</span>
                <strong className="text-white">{selectedInvoice.carrier}</strong>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-sm">
                <span className="font-bold text-white">Grand Invoice Total:</span>
                <strong className="font-mono text-emerald-400 text-lg">
                  ₹{selectedInvoice.orderValue.toLocaleString('en-IN')}
                </strong>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 rounded-xl bg-orange-500 hover:bg-orange-400 py-2.5 text-xs font-bold text-black text-center transition"
              >
                Print Formal Invoice
              </button>
              <button
                onClick={() => setSelectedInvoice(null)}
                className="flex-1 rounded-xl border border-white/20 hover:border-white py-2.5 text-xs font-semibold text-white text-center transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
