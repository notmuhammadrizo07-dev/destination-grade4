"""
book_css.py - Destination-Style Design and Print CSS for Grade 4 Grammar Book
"""

CSS_CONTENT = """
:root {
  --primary: #007791;       /* Destination Teal */
  --primary-dark: #004e5f;
  --primary-light: #e0f2fe;
  --secondary: #1e293b;     /* Deep Slate Navy */
  --accent: #f59e0b;        /* Amber / Orange Highlight */
  --accent-light: #fef3c7;
  --coral: #ef4444;
  --green: #10b981;
  --purple: #8b5cf6;
  --text-main: #1f2937;
  --text-muted: #4b5563;
  --bg-card: #f8fafc;
  --border-color: #cbd5e1;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
  color: var(--text-main);
  background-color: #e2e8f0;
  line-height: 1.35;
  font-size: 10pt;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* Screen Navigation Toolbar */
.screen-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  background: #0f172a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 9999;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.toolbar-title {
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-nav {
  background: var(--primary);
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.btn-nav:hover {
  background: #0284c7;
  transform: translateY(-1px);
}

.btn-print {
  background: #f59e0b;
  color: #1e293b;
}

.btn-print:hover {
  background: #fbbf24;
}

.page-selector {
  background: #334155;
  color: white;
  border: 1px solid #475569;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
}

.book-container {
  margin-top: 65px;
  padding-bottom: 40px;
}

/* A4 Page Formatting */
@page {
  size: A4 portrait;
  margin: 0;
}

.page {
  width: 210mm;
  height: 297mm;
  max-height: 297mm;
  background: white;
  margin: 15px auto;
  padding: 10mm 12mm 9mm 12mm;
  position: relative;
  page-break-after: always;
  page-break-inside: avoid;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
}

/* Header & Running Bar */
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--primary);
  padding-bottom: 4px;
  margin-bottom: 7px;
  font-size: 8.5pt;
  font-weight: 700;
  color: var(--primary-dark);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.page-header .brand-title {
  display: flex;
  align-items: center;
  gap: 6px;
}

.page-header .grade-badge {
  background: var(--accent);
  color: #1e293b;
  font-size: 7.5pt;
  padding: 1px 6px;
  border-radius: 10px;
  font-weight: 800;
}

.page-footer {
  margin-top: auto;
  border-top: 1px solid var(--border-color);
  padding-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 8pt;
  color: var(--text-muted);
}

.page-number-box {
  background: var(--primary);
  color: white;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 8pt;
}

/* Unit Banner */
.unit-banner {
  background: linear-gradient(135deg, #007791 0%, #004e5f 100%);
  color: white;
  border-radius: 8px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  box-shadow: 0 2px 6px rgba(0, 119, 145, 0.25);
}

.unit-banner.banner-revision {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #111827;
}

.unit-banner.banner-final {
  background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
  color: white;
}

.unit-banner-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.unit-badge {
  background: white;
  color: var(--primary-dark);
  font-weight: 900;
  font-size: 13pt;
  padding: 3px 10px;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}

.banner-revision .unit-badge {
  background: #1e293b;
  color: white;
}

.unit-title-group h1 {
  font-size: 12.5pt;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.2px;
}

.unit-title-group p {
  font-size: 8.5pt;
  opacity: 0.9;
  font-weight: 500;
}

.unit-tag {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 3px 8px;
  border-radius: 20px;
  font-size: 7.5pt;
  font-weight: 700;
  text-transform: uppercase;
}

/* Grammar Presentation Box */
.section-card {
  background: white;
  border: 1.5px solid var(--border-color);
  border-radius: 7px;
  padding: 6px 10px;
  margin-bottom: 7px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 9.5pt;
  font-weight: 800;
  color: var(--primary-dark);
  margin-bottom: 4px;
}

.section-title .badge-letter {
  background: var(--primary);
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 8pt;
  font-weight: 900;
}

.rule-box {
  background: #f0fdfa;
  border-left: 4px solid var(--primary);
  padding: 5px 8px;
  border-radius: 0 5px 5px 0;
  font-size: 8.5pt;
  margin-bottom: 5px;
  line-height: 1.3;
}

.rule-box strong {
  color: var(--primary-dark);
}

/* Grammar Tables */
.grammar-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 8pt;
  margin-bottom: 6px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  overflow: hidden;
}

.grammar-table th {
  background: #007791;
  color: white;
  padding: 4px 6px;
  text-align: left;
  font-weight: 700;
  font-size: 8pt;
}

.grammar-table td {
  padding: 3.5px 6px;
  border-bottom: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
}

.grammar-table tr:nth-child(even) {
  background-color: #f8fafc;
}

.grammar-table tr:last-child td {
  border-bottom: none;
}

/* Destination Tips & Warnings */
.tip-box {
  background: #fffbeb;
  border: 1.5px dashed #f59e0b;
  border-radius: 6px;
  padding: 5px 8px;
  font-size: 8pt;
  margin-bottom: 6px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.tip-icon {
  font-size: 13pt;
  line-height: 1;
}

.tip-content strong {
  color: #b45309;
}

/* Vocabulary 5-column Table */
.vocab-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 7.8pt;
  margin-bottom: 6px;
  border: 1px solid #cbd5e1;
}

.vocab-table th {
  background: #1e293b;
  color: white;
  padding: 4px 6px;
  font-weight: 700;
  text-align: left;
}

.vocab-table td {
  padding: 3px 5px;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: middle;
}

.vocab-table tr:nth-child(even) {
  background-color: #f1f5f9;
}

.vocab-word {
  font-weight: 700;
  color: #007791;
}

.vocab-synonym {
  font-weight: 700;
  color: #b45309;
  background: #fef3c7;
  padding: 1px 4px;
  border-radius: 3px;
  display: inline-block;
}

.vocab-example {
  color: #334155;
  font-style: italic;
}

/* Exercise Layout */
.exercise-box {
  border: 1px solid #cbd5e1;
  background: white;
  border-radius: 6px;
  padding: 6px 8px;
  margin-bottom: 6px;
}

.exercise-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  padding-bottom: 3px;
  border-bottom: 1px solid #e2e8f0;
}

.exercise-title {
  font-size: 8.8pt;
  font-weight: 800;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 6px;
}

.exercise-score {
  font-size: 7.5pt;
  font-weight: 700;
  color: var(--primary);
  background: var(--primary-light);
  padding: 1px 6px;
  border-radius: 10px;
}

.ex-instruction {
  font-size: 7.8pt;
  color: #475569;
  margin-bottom: 4px;
  font-style: italic;
}

.q-list {
  list-style: none;
  font-size: 8pt;
}

.q-item {
  margin-bottom: 3.5px;
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

.q-num {
  font-weight: 700;
  color: #007791;
  min-width: 14px;
}

.q-blank {
  display: inline-block;
  min-width: 55px;
  border-bottom: 1.5px solid #64748b;
  margin: 0 3px;
  height: 12px;
}

/* Fun Card & Detective Boxes */
.fun-card {
  background: #f0fdf4;
  border: 1.5px solid #86efac;
  border-radius: 6px;
  padding: 6px 8px;
  margin-bottom: 6px;
}

.fun-title {
  color: #166534;
  font-weight: 800;
  font-size: 8.8pt;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

/* Mascot stamp box */
.mascot-stamp {
  background: #faf5ff;
  border: 1px solid #d8b4fe;
  border-radius: 6px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 7.8pt;
  margin-top: auto;
}

.star-rating {
  color: #eab308;
  font-weight: 700;
}

/* Print Specific */
@media print {
  .screen-toolbar {
    display: none !important;
  }
  body {
    background: white;
  }
  .book-container {
    margin: 0;
    padding: 0;
  }
  .page {
    margin: 0;
    box-shadow: none;
    border-radius: 0;
    height: 297mm;
    max-height: 297mm;
    page-break-after: always;
    page-break-inside: avoid;
  }
}
"""
