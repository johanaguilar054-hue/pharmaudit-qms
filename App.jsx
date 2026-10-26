import React, { useState } from 'react';
import { 
  FileText, AlertTriangle, CheckSquare, RefreshCw, Wrench, Shield, 
  Search, Plus, Eye, Download, CheckCircle, Clock, XCircle, ChevronRight,
  TrendingUp, Activity, Lock, Award, BarChart2
} from 'lucide-react';

export default function PharmAuditApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedNC, setSelectedNC] = useState(null);
  const [selectedEquipo, setSelectedEquipo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Datos Simulados GxP
  const kpis = {
    docsVigentes: 142,
    desviacionesAbiertas: 3,
    capasPendientes: 5,
    cambiosEnRevision: 2,
    calibracionesCriticas: 1
  };

  const documentos = [
    { id: 'SOP-CAL-001', titulo: 'Procedimiento de Manejo de Desviaciones', tipo: 'SOP', version: '3.0', estado: 'Vigente', vigencia: '2027-05-15', revisor: 'A. Martínez (QA)' },
    { id: 'SOP-PRO-012', titulo: 'Limpieza e Higienización de Áreas Limpias Class C', tipo: 'SOP', version: '2.1', estado: 'Vigente', vigencia: '2026-11-30', revisor: 'C. López (Prod)' },
    { id: 'PROT-VAL-088', titulo: 'Protocolo de Calificación de Desempeño (PQ) Autoclave', tipo: 'Protocolo', version: '1.0', estado: 'En Revisión', vigencia: '2026-12-01', revisor: 'J. Aguilar (Val)' },
    { id: 'MAN-CAL-003', titulo: 'Manual del Sistema de Gestión de Calidad GAMP 5', tipo: 'Manual', version: '5.0', estado: 'Vigente', vigencia: '2028-01-10', revisor: 'M. Gomez (Director)' }
  ];

  const desviaciones = [
    { 
      id: 'DEV-2026-014', 
      fecha: '2026-10-20', 
      area: 'Planta de Producción - Reactores', 
      clasificacion: 'Mayor', 
      descripcion: 'Excursión de temperatura fuera de especificación (28°C vs máx 25°C) durante granulación batch 4092.',
      estado: 'Análisis Causa Raíz',
      ishikawa: {
        manoObra: 'Falta de re-capacitación en turno nocturno',
        ma
