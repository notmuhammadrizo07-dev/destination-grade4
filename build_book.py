"""
build_book.py - Generates the complete 50-page Destination Grade 4 English Grammar Book in HTML and PDF
"""

import os
import sys
import subprocess
from book_css import CSS_CONTENT
from unit_data_part1 import UNITS_PART1
from unit_data_part2 import UNITS_PART2, REVISION_1_DATA, REVISION_2_DATA
from unit_data_part3 import (
    UNITS_PART3, STARTER_TEST_DATA, FINAL_TEST_DATA,
    APPENDIX_DATA, ANSWER_KEY_DATA
)
from cloze_20_pages_data import CLOZE_STORIES_DATA

def render_header(unit_title, page_num):
    return f"""
    <div class="page-header">
      <div class="brand-title">
        <span style="color:#f59e0b;">★</span> DESTINATION GRAMMAR &amp; VOCABULARY
        <span class="grade-badge">GRADE 4</span>
      </div>
      <div>{unit_title}</div>
    </div>
    """

def render_footer(page_num):
    return f"""
    <div class="page-footer">
      <div>Destination English 4 • O'zbekiston maktablari uchun maxsus</div>
      <div>Barcha huquqlar himoyalangan © 2026</div>
      <div class="page-number-box">Page {page_num} of 70</div>
    </div>
    """

def generate_cover_page():
    return """
    <div class="page" id="page-1" data-page="1" style="background: radial-gradient(circle at 80% 20%, #e0f2fe 0%, #ffffff 60%, #f0fdfa 100%); justify-content: space-between; border: 8px double #007791;">
      
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #007791; padding-bottom: 8px;">
        <span style="font-weight: 900; color: #007791; font-size: 11pt; letter-spacing: 1px;">MACMILLAN & DESTINATION INSPIRED SERIES</span>
        <span style="background: #f59e0b; color: #1e293b; font-weight: 900; padding: 3px 12px; border-radius: 20px; font-size: 9pt;">4-SINF UCHUN MAXSUS • 70 BET</span>
      </div>

      <div style="text-align: center; margin: 15px 0;">
        <div style="display: inline-block; background: #007791; color: white; padding: 6px 20px; border-radius: 30px; font-size: 11pt; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px; box-shadow: 0 4px 10px rgba(0,119,145,0.3);">
          PRIMARY ENGLISH GRAMMAR WORKBOOK
        </div>
        <h1 style="font-size: 28pt; font-weight: 950; color: #0f172a; line-height: 1.1; margin-bottom: 8px; letter-spacing: -0.5px;">
          DESTINATION <span style="color: #007791;">GRAMMAR</span><br>
          <span style="color: #f59e0b;">&amp; VOCABULARY</span>
        </h1>
        <p style="font-size: 13pt; color: #475569; font-weight: 600; max-width: 520px; margin: 0 auto;">
          Barcha zamonlar, 140 ta oltin lug'at, sinonimlar va 20 betlik maxsus matnli zamon topshiriqlari to'plami
        </p>
      </div>

      <!-- Mascot & Fun Illustration Area -->
      <div style="background: white; border: 2px solid #cbd5e1; border-radius: 16px; padding: 15px; margin: 10px 0; box-shadow: 0 10px 25px rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: space-around;">
        <div style="text-align: center; max-width: 170px;">
          <div style="font-size: 40pt; line-height: 1;">🦉</div>
          <div style="font-weight: 800; color: #007791; font-size: 10pt; margin-top: 4px;">Professor Owl</div>
          <div style="font-size: 7.5pt; color: #64748b;">Grammatika qoidalarining donishmandi</div>
        </div>
        
        <div style="border-left: 2px dashed #cbd5e1; height: 90px;"></div>

        <div style="text-align: center; max-width: 170px;">
          <div style="font-size: 40pt; line-height: 1;">🐰</div>
          <div style="font-weight: 800; color: #f59e0b; font-size: 10pt; margin-top: 4px;">Benny Bunny</div>
          <div style="font-size: 7.5pt; color: #64748b;">Quvnoq sarguzashtlar va o'yinlar yetakchisi</div>
        </div>
      </div>

      <!-- Book Features Grid -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin: 10px 0;">
        <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 10px; padding: 10px; display: flex; gap: 10px; align-items: center;">
          <div style="font-size: 22pt;">📘</div>
          <div>
            <div style="font-weight: 800; color: #166534; font-size: 9.5pt;">70 betlik to'liq to'plam</div>
            <div style="font-size: 8pt; color: #334155;">50 bet Asosiy Darslik + 20 bet Maxsus Matnlar</div>
          </div>
        </div>

        <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 10px; padding: 10px; display: flex; gap: 10px; align-items: center;">
          <div style="font-size: 22pt;">🎯</div>
          <div>
            <div style="font-weight: 800; color: #b45309; font-size: 9.5pt;">140 ta oltin so'z va sinonim</div>
            <div style="font-size: 8pt; color: #334155;">Har mavzuda 10 ta so'z, tarjimasi va namunasi</div>
          </div>
        </div>

        <div style="background: #e0f2fe; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 10px; display: flex; gap: 10px; align-items: center;">
          <div style="font-size: 22pt;">🧩</div>
          <div>
            <div style="font-weight: 800; color: #0369a1; font-size: 9.5pt;">20 betlik maxsus matnlar</div>
            <div style="font-size: 8pt; color: #334155;">Qavsdagi fe'llarni to'g'ri zamonga moslash hikoyalari</div>
          </div>
        </div>

        <div style="background: #faf5ff; border: 1.5px solid #e9d5ff; border-radius: 10px; padding: 10px; display: flex; gap: 10px; align-items: center;">
          <div style="font-size: 22pt;">🏆</div>
          <div>
            <div style="font-weight: 800; color: #7e22ce; font-size: 9.5pt;">Javoblar kaliti va Sertifikat</div>
            <div style="font-size: 8pt; color: #334155;">Mustaqil tekshirish va Grand Master diplomi</div>
          </div>
        </div>
      </div>

      <!-- Publication Footer -->
      <div style="text-align: center; border-top: 2px solid #007791; padding-top: 10px; margin-top: 5px;">
        <div style="font-weight: 800; color: #007791; font-size: 10pt;">INGLIZ TILI - 4-SINF O'QUVCHILARI VA O'QITUVCHILARI UCHUN</div>
        <div style="font-size: 8.5pt; color: #64748b; margin-top: 2px;">Toshkent - 2026 • Destination Format Edition • 70 Pages</div>
      </div>

    </div>
    """

def generate_contents_page():
    return f"""
    <div class="page" id="page-2" data-page="2">
      {render_header("Table of Contents • Mundarija", 2)}
      
      <div class="unit-banner" style="background: linear-gradient(135deg, #007791 0%, #004e5f 100%);">
        <div class="unit-banner-left">
          <div class="unit-badge">M</div>
          <div class="unit-title-group">
            <h1>MUNDARIJA &amp; O'QISH YO'RIQNOMASI</h1>
            <p>70 betlik mukammal grammatika, lug'at va sarguzasht matnlar xaritasi</p>
          </div>
        </div>
        <div class="unit-tag">ROADMAP 70 PAGES</div>
      </div>

      <!-- Contents Grid - 3 Columns for 70 Pages -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1.05fr; gap: 6px; margin-bottom: 8px;">
        
        <!-- Column 1: Present Tenses (Pages 3-22) -->
        <div class="section-card" style="padding: 5px 7px;">
          <div style="font-weight: 900; color: #007791; font-size: 8.2pt; border-bottom: 1.5px solid #007791; padding-bottom: 2px; margin-bottom: 4px;">
            1-QISM: PRESENT TENSES
          </div>
          <ul style="list-style: none; font-size: 7.2pt; line-height: 1.4;">
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Starter:</strong> Diagnostic Test</span><span style="font-weight: 700; color: #007791;">Bet 3</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 1:</strong> 'To Be' (am, is, are)</span><span style="font-weight: 700; color: #007791;">Bet 4-6</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 2:</strong> Action Verbs (Habits)</span><span style="font-weight: 700; color: #007791;">Bet 7-9</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 3:</strong> Negatives &amp; Questions</span><span style="font-weight: 700; color: #007791;">Bet 10-12</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 4:</strong> Continuous (+ / -)</span><span style="font-weight: 700; color: #007791;">Bet 13-15</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 5:</strong> Continuous Questions</span><span style="font-weight: 700; color: #007791;">Bet 16-18</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 6:</strong> Simple vs Continuous</span><span style="font-weight: 700; color: #007791;">Bet 19-21</span>
            </li>
            <li style="display: flex; justify-content: space-between; padding: 1px 0; background: #fef3c7; border-radius: 3px; padding: 2px 3px; margin-top: 2px;">
              <span style="font-weight: 800; color: #b45309;">★ Revision 1: Units 1-6</span><span style="font-weight: 900; color: #b45309;">Bet 22</span>
            </li>
          </ul>
        </div>

        <!-- Column 2: Past & Future Tenses (Pages 23-50) -->
        <div class="section-card" style="padding: 5px 7px;">
          <div style="font-weight: 900; color: #007791; font-size: 8.2pt; border-bottom: 1.5px solid #007791; padding-bottom: 2px; margin-bottom: 4px;">
            2-QISM: PAST &amp; FUTURE TENSES
          </div>
          <ul style="list-style: none; font-size: 7.2pt; line-height: 1.4;">
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 7:</strong> Past 'To Be' (was/were)</span><span style="font-weight: 700; color: #007791;">Bet 23-25</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 8:</strong> Regular Verbs (-ed)</span><span style="font-weight: 700; color: #007791;">Bet 26-28</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 9:</strong> Irregular Verbs</span><span style="font-weight: 700; color: #007791;">Bet 29-31</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 10:</strong> Past Negatives &amp; (?)</span><span style="font-weight: 700; color: #007791;">Bet 32-34</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 11:</strong> Past Continuous</span><span style="font-weight: 700; color: #007791;">Bet 35-37</span>
            </li>
            <li style="display: flex; justify-content: space-between; padding: 1px 0; background: #fef3c7; border-radius: 3px; padding: 1px 3px;">
              <span style="font-weight: 800; color: #b45309;">★ Revision 2 (7-11)</span><span style="font-weight: 900; color: #b45309;">Bet 38</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 12:</strong> Future 'be going to'</span><span style="font-weight: 700; color: #007791;">Bet 39-41</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 13:</strong> Future Simple 'will'</span><span style="font-weight: 700; color: #007791;">Bet 42-44</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Unit 14:</strong> Present Perfect</span><span style="font-weight: 700; color: #007791;">Bet 45-47</span>
            </li>
            <li style="display: flex; justify-content: space-between; background: #e0f2fe; padding: 1px 3px;">
              <span style="font-weight: 800; color: #0369a1;">★ Final Test &amp; Appendix</span><span style="font-weight: 900; color: #0369a1;">Bet 48-49</span>
            </li>
            <li style="display: flex; justify-content: space-between; background: #f0fdf4; padding: 1px 3px;">
              <span style="font-weight: 800; color: #166534;">★ Answers &amp; Cert 1</span><span style="font-weight: 900; color: #166534;">Bet 50</span>
            </li>
          </ul>
        </div>

        <!-- Column 3: Section 4 - 20 Cloze Reading Pages (Pages 51-70) -->
        <div class="section-card" style="padding: 5px 7px; background: #fdfbf7; border: 1.5px solid #f59e0b;">
          <div style="font-weight: 900; color: #b45309; font-size: 8.2pt; border-bottom: 1.5px solid #f59e0b; padding-bottom: 2px; margin-bottom: 4px;">
            3-QISM: 20 BETLIK MATNLAR
          </div>
          <ul style="list-style: none; font-size: 7.2pt; line-height: 1.4;">
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Sec 4:</strong> Reading Strategy &amp; Rules</span><span style="font-weight: 700; color: #b45309;">Bet 51</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Story 1-3:</strong> Present Simple Stories</span><span style="font-weight: 700; color: #007791;">Bet 52-54</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Story 4-6:</strong> Present Continuous</span><span style="font-weight: 700; color: #007791;">Bet 55-57</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Story 7-10:</strong> Past Simple Stories</span><span style="font-weight: 700; color: #007791;">Bet 58-61</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Story 11:</strong> Past Continuous Story</span><span style="font-weight: 700; color: #007791;">Bet 62</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Story 12-13:</strong> Future Stories</span><span style="font-weight: 700; color: #007791;">Bet 63-64</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Story 14:</strong> Present Perfect Story</span><span style="font-weight: 700; color: #007791;">Bet 65</span>
            </li>
            <li style="display: flex; justify-content: space-between; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">
              <span><strong>Story 15-17:</strong> Quests &amp; Interviews</span><span style="font-weight: 700; color: #007791;">Bet 66-68</span>
            </li>
            <li style="display: flex; justify-content: space-between; background: #fef3c7; padding: 1px 3px;">
              <span style="font-weight: 800; color: #b45309;">★ Matnlar Javoblar Kaliti</span><span style="font-weight: 900; color: #b45309;">Bet 69</span>
            </li>
            <li style="display: flex; justify-content: space-between; background: #ecfdf5; padding: 1px 3px;">
              <span style="font-weight: 800; color: #047857;">★ Grand Master Diplomi</span><span style="font-weight: 900; color: #047857;">Bet 70</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- How to study section -->
      <div class="section-card" style="background: #f8fafc; border-left: 4px solid #007791; padding: 6px 10px;">
        <div style="font-weight: 900; color: #007791; font-size: 8.5pt; margin-bottom: 3px;">
          📖 DESTINATION BILAN QANDAY O'RGANISH KERAK? (4 Oltin Qoida)
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; font-size: 7.4pt;">
          <div style="background: white; border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px; text-align: center;">
            <div style="font-weight: 800; color: #007791; font-size: 10pt;">1</div>
            <div style="font-weight: 700; margin-bottom: 1px;">Qoidani O'qing</div>
            <p style="color: #64748b;">Har bir mavzuning jadvali va qoidalarini ko'ring.</p>
          </div>
          <div style="background: white; border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px; text-align: center;">
            <div style="font-weight: 800; color: #f59e0b; font-size: 10pt;">2</div>
            <div style="font-weight: 700; margin-bottom: 1px;">10 ta So'z va Sinonim</div>
            <p style="color: #64748b;">Lug'at jadvalidagi so'zlar va sinonimlarni yod oling.</p>
          </div>
          <div style="background: white; border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px; text-align: center;">
            <div style="font-weight: 800; color: #10b981; font-size: 10pt;">3</div>
            <div style="font-weight: 700; margin-bottom: 1px;">Mashqlarni Yeching</div>
            <p style="color: #64748b;">A, B, C, D mashqlarini kitobda bajaring.</p>
          </div>
          <div style="background: white; border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px; text-align: center;">
            <div style="font-weight: 800; color: #8b5cf6; font-size: 10pt;">4</div>
            <div style="font-weight: 700; margin-bottom: 1px;">20 Betlik Hikoyalar</div>
            <p style="color: #64748b;">Qavsdagi fe'llarni zamonga qo'yib tekshiring!</p>
          </div>
        </div>
      </div>

      {render_footer(2)}
    </div>
    """

def generate_starter_test_page():
    st = STARTER_TEST_DATA
    q_half1 = st["questions"][:8]
    q_half2 = st["questions"][8:]

    def format_q_list(q_list, start_idx):
        html = '<div style="display:flex; flex-direction:column; gap:4px;">'
        for q in q_list:
            html += f'<div style="font-size: 7.8pt; background: white; padding: 3.5px 6px; border: 1px solid #e2e8f0; border-radius: 4px;">{q}</div>'
        html += '</div>'
        return html

    return f"""
    <div class="page" id="page-3" data-page="3">
      {render_header("Diagnostic Starter Test", 3)}
      
      <div class="unit-banner" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);">
        <div class="unit-banner-left">
          <div class="unit-badge">0</div>
          <div class="unit-title-group">
            <h1>{st["title"]}</h1>
            <p>{st["subtitle"]}</p>
          </div>
        </div>
        <div class="unit-tag">{st["tag"]}</div>
      </div>

      <div class="tip-box" style="margin-bottom: 6px; padding: 4px 8px;">
        <span class="tip-icon">💡</span>
        <div class="tip-content">
          <strong>Yo'riqnoma:</strong> {st["instructions"]}
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
        {format_q_list(q_half1, 1)}
        {format_q_list(q_half2, 9)}
      </div>

      <!-- Rating Scale Card -->
      <div class="section-card" style="background: #f0fdf4; border: 1.5px solid #86efac; padding: 6px 10px; margin-top: auto;">
        <div style="font-weight: 800; color: #166534; font-size: 8.5pt; margin-bottom: 4px;">
          📊 NATIJANI BAHOLASH JADVALI (Sizning darajangiz qanday?)
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; font-size: 7.6pt;">
          <div style="background: white; border: 1px solid #bbf7d0; padding: 4px 6px; border-radius: 5px;">
            <div style="font-weight: 800; color: #15803d;">🏆 13 - 15 ball</div>
            <div>Super Star! Boshlang'ich bilimingiz juda kuchli!</div>
          </div>
          <div style="background: white; border: 1px solid #bbf7d0; padding: 4px 6px; border-radius: 5px;">
            <div style="font-weight: 800; color: #ca8a04;">⭐ 9 - 12 ball</div>
            <div>Yaxshi natija! Yangi so'zlar va qoidalarni o'rganamiz!</div>
          </div>
          <div style="background: white; border: 1px solid #bbf7d0; padding: 4px 6px; border-radius: 5px;">
            <div style="font-weight: 800; color: #0284c7;">🚀 0 - 8 ball</div>
            <div>Olg'a! Ushbu 50 betlik kitob bilan siz chempion bo'lasiz!</div>
          </div>
        </div>
      </div>

      {render_footer(3)}
    </div>
    """

def generate_unit_pages(unit, start_page_num):
    # Page 1 of Unit: Grammar Presentation
    p1_num = start_page_num
    p2_num = start_page_num + 1
    p3_num = start_page_num + 2

    # Build Grammar Page
    tables_html = ""
    for tbl in unit["grammar"]["tables"]:
        t_head = "".join([f"<th>{h}</th>" for h in tbl["headers"]])
        t_rows = ""
        for row in tbl["rows"]:
            t_rows += "<tr>" + "".join([f"<td>{c}</td>" for c in row]) + "</tr>"
        tables_html += f"""
        <div style="margin-bottom: 5px;">
          <div style="font-weight: 700; color: #007791; font-size: 8.2pt; margin-bottom: 2px;">{tbl["title"]}</div>
          <table class="grammar-table">
            <thead><tr>{t_head}</tr></thead>
            <tbody>{t_rows}</tbody>
          </table>
        </div>
        """

    grammar_page = f"""
    <div class="page" id="page-{p1_num}" data-page="{p1_num}">
      {render_header(f"Unit {unit['unit_num']} • Grammar Presentation", p1_num)}
      
      <div class="unit-banner">
        <div class="unit-banner-left">
          <div class="unit-badge">{unit['unit_num']}</div>
          <div class="unit-title-group">
            <h1>{unit['title']}</h1>
            <p>{unit['subtitle']}</p>
          </div>
        </div>
        <div class="unit-tag">{unit['tag']}</div>
      </div>

      <div class="section-card">
        <div class="section-title">
          <span class="badge-letter">A</span>
          <span>GRAMMATIK QOIDA VA MA'NOSI (Grammar Rules &amp; Usage)</span>
        </div>
        <div class="rule-box">
          {unit['grammar']['meaning']}
        </div>
        {tables_html}
      </div>

      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div class="tip-content">
          {unit['grammar']['tip']}
        </div>
      </div>

      <div class="section-card" style="background: #f0fdfa; border: 1.5px solid #99f6e4; padding: 4px 8px; margin-top: auto;">
        <div style="font-size: 7.8pt;">
          {unit['grammar']['time_words']}
        </div>
      </div>

      {render_footer(p1_num)}
    </div>
    """

    # Page 2 of Unit: 10 Words Table + Ex A + Ex B
    vocab_rows = ""
    for v in unit["vocab"]:
        vocab_rows += f"""
        <tr>
          <td style="font-weight:800; text-align:center; width:16px;">{v['num']}</td>
          <td class="vocab-word">{v['word']} <span style="font-size:7.2pt; color:#475569; font-weight:normal;">({v['uz']})</span></td>
          <td style="font-size:7.2pt; color:#64748b;"><em>{v['pos']}</em> - {v['meaning']}</td>
          <td><span class="vocab-synonym">{v['synonym']}</span></td>
          <td class="vocab-example">{v['example']}</td>
        </tr>
        """

    ex_a_items = "".join([f'<div class="q-item"><span class="q-num">{it.split(".")[0]}.</span><span>{it.split(".", 1)[1]}</span></div>' for it in unit["ex_a"]["items"]])
    ex_b_items = "".join([f'<div class="q-item"><span class="q-num">{it.split(".")[0]}.</span><span>{it.split(".", 1)[1]}</span></div>' for it in unit["ex_b"]["items"]])

    if unit['unit_num'] == 6:
        vocab_chips = "".join([f'<span style="background: #e0f2fe; color: #0369a1; padding: 1px 5px; border-radius: 4px; font-size: 7.2pt; font-weight: 700;">{v["word"]} = {v["synonym"]} <em style="font-weight: normal; color:#475569;">({v["uz"]})</em></span> ' for v in unit["vocab"]])
        
        vocab_and_core_ex_page = f"""
    <div class="page" id="page-20" data-page="20">
      {render_header("Special Page 20 • Grand Reading Cloze Story", 20)}
      
      <div class="unit-banner" style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);">
        <div class="unit-banner-left">
          <div class="unit-badge" style="background: #fef08a; color: #854d0e;">20</div>
          <div class="unit-title-group">
            <h1>PAGE 20: GRAND CLOZE STORY • THE TIME MACHINE</h1>
            <p>Barcha o'rganilgan zamonlar bo'yicha maxsus matn: Qavsdagi fe'llarni to'g'ri shaklga qo'ying!</p>
          </div>
        </div>
        <div class="unit-tag" style="background: rgba(255,255,255,0.25);">20 BLANKS CHALLENGE</div>
      </div>

      <div class="section-card" style="padding: 4px 8px; margin-bottom: 5px; background: #f8fafc;">
        <div style="font-weight: 800; color: #0f766e; font-size: 7.8pt; margin-bottom: 2px;">
          📚 UNIT 6 ESSENTIAL WORDS &amp; SYNONYMS (Yordamchi so'zlar banki):
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 3px;">
          {vocab_chips}
        </div>
      </div>

      <div class="section-card" style="padding: 7px 10px; margin-bottom: 6px; border: 1.5px solid #0d9488; background: #fff;">
        <div style="font-weight: 800; color: #0f766e; font-size: 8.4pt; display: flex; justify-content: space-between; margin-bottom: 4px; border-bottom: 1px solid #ccfbf1; padding-bottom: 3px;">
          <span>📖 READ AND COMPLETE: THE TIME MACHINE ADVENTURE</span>
          <span style="color: #d97706; font-size: 7.6pt;">Qavsdagi fe'llarni to'g'ri zamonga qo'ying</span>
        </div>
        
        <div style="font-size: 7.8pt; line-height: 1.48; color: #1e293b;">
          Every morning, Benny the Bunny <b>(1. wake up)</b> <span style="display:inline-block; min-width:65px; border-bottom:1.5px solid #0d9488;">___________</span> early at seven o'clock. 
          He usually <b>(2. eat)</b> <span style="display:inline-block; min-width:45px; border-bottom:1.5px solid #0d9488;">___________</span> crunchy carrots and <b>(3. play)</b> <span style="display:inline-block; min-width:45px; border-bottom:1.5px solid #0d9488;">___________</span> in the sunny meadow. 
          <br>
          But today <b>(4. be)</b> <span style="display:inline-block; min-width:35px; border-bottom:1.5px solid #0d9488;">___________</span> a very special day! 
          Look! Benny and Professor Owl <b>(5. stand)</b> <span style="display:inline-block; min-width:70px; border-bottom:1.5px solid #0d9488;">___________</span> in front of a giant metallic machine. 
          The engine <b>(6. make)</b> <span style="display:inline-block; min-width:65px; border-bottom:1.5px solid #0d9488;">___________</span> strange humming sounds right now!
          <br>
          'What is this?' asks Benny. Professor Owl answers: 'It is a Time Machine! Yesterday, I <b>(7. find)</b> <span style="display:inline-block; min-width:50px; border-bottom:1.5px solid #0d9488;">___________</span> an ancient golden key in the library. 
          Last night, I <b>(8. repair)</b> <span style="display:inline-block; min-width:60px; border-bottom:1.5px solid #0d9488;">___________</span> the clockwork while everyone <b>(9. sleep)</b> <span style="display:inline-block; min-width:75px; border-bottom:1.5px solid #0d9488;">___________</span>!'
          <br>
          Yesterday, Benny <b>(10. be)</b> <span style="display:inline-block; min-width:40px; border-bottom:1.5px solid #0d9488;">___________</span> afraid of time machines, but today he <b>(11. not / be)</b> <span style="display:inline-block; min-width:55px; border-bottom:1.5px solid #0d9488;">___________</span> scared at all. 
          Ten minutes ago, they <b>(12. be)</b> <span style="display:inline-block; min-width:45px; border-bottom:1.5px solid #0d9488;">___________</span> in the quiet classroom, but look now! 
          They <b>(13. fly)</b> <span style="display:inline-block; min-width:65px; border-bottom:1.5px solid #0d9488;">___________</span> high above green clouds!
          <br>
          'Tomorrow, we <b>(14. be going to visit)</b> <span style="display:inline-block; min-width:115px; border-bottom:1.5px solid #0d9488;">___________________</span> the dinosaur valley!' says the Professor. 
          'And I believe we <b>(15. see)</b> <span style="display:inline-block; min-width:55px; border-bottom:1.5px solid #0d9488;">___________</span> friendly creatures. 
          In my life, I <b>(16. have / never / meet)</b> <span style="display:inline-block; min-width:110px; border-bottom:1.5px solid #0d9488;">___________________</span> a real T-Rex before! 
          I hope it <b>(17. will / be)</b> <span style="display:inline-block; min-width:55px; border-bottom:1.5px solid #0d9488;">___________</span> friendly.'
          <br>
          Right now, the machine <b>(18. travel)</b> <span style="display:inline-block; min-width:75px; border-bottom:1.5px solid #0d9488;">___________</span> through the clouds. 
          Benny <b>(19. love)</b> <span style="display:inline-block; min-width:45px; border-bottom:1.5px solid #0d9488;">___________</span> learning English grammar adventures, and he promises: 
          'I <b>(20. learn)</b> <span style="display:inline-block; min-width:65px; border-bottom:1.5px solid #0d9488;">___________</span> every single tense in this book!'
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; font-size: 7.2pt; background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 5px; padding: 4px 6px;">
        <div>1. wake up (Pres. Simple)</div>
        <div>2. eat (Pres. Simple)</div>
        <div>3. play (Pres. Simple)</div>
        <div>4. be (Pres. Simple)</div>
        <div>5. stand (Continuous)</div>
        <div>6. make (Continuous)</div>
        <div>7. find (Past Simple)</div>
        <div>8. repair (Past Simple)</div>
        <div>9. sleep (Past Continuous)</div>
        <div>10. be (Past Simple)</div>
        <div>11. not / be (Negative)</div>
        <div>12. be (Past Simple)</div>
        <div>13. fly (Continuous)</div>
        <div>14. be going to visit</div>
        <div>15. see (Future Simple)</div>
        <div>16. have never met</div>
        <div>17. will / be (Future)</div>
        <div>18. travel (Continuous)</div>
        <div>19. love (State Verb)</div>
        <div>20. learn (Promise)</div>
      </div>

      <div class="mascot-stamp" style="margin-top: auto; background: #f0fdfa; border-color: #5eead4;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 16pt;">⏱️</span>
          <div>
            <strong>Page 20 Cloze Master Rating:</strong>
            <span style="color: #0f766e; font-size: 7.5pt; font-weight:700;">Score: ___ / 20 ball</span>
          </div>
        </div>
        <div class="star-rating">
          ★★★★★ <span style="color:#334155; font-size:7.5pt;">(20 ta zamon fe'li)</span>
        </div>
        <div style="font-size: 7.2pt; color: #475569;">
          O'qituvchi tekshiruvi: [ &nbsp; ] A'lo &nbsp; [ &nbsp; ] Yaxshi
        </div>
      </div>

      {render_footer(20)}
    </div>
    """
    else:
        vocab_and_core_ex_page = f"""
    <div class="page" id="page-{p2_num}" data-page="{p2_num}">
      {render_header(f"Unit {unit['unit_num']} • Vocabulary &amp; Exercises", p2_num)}
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 4px;">
        <div style="font-weight: 800; font-size: 9pt; color: #007791;">
          📚 UNIT VOCABULARY • 10 TA KERAKLI SO'Z VA ULARNING SINONIMLARI
        </div>
        <span style="font-size: 7.5pt; background: #e0f2fe; color: #0369a1; padding: 1px 6px; border-radius: 10px; font-weight: 700;">Word Bank</span>
      </div>

      <table class="vocab-table">
        <thead>
          <tr>
            <th style="width:16px;">№</th>
            <th>Inglizcha so'z va Tarjima</th>
            <th>Turi &amp; Ma'nosi</th>
            <th>Sinonimi (Synonym)</th>
            <th>Qo'llanish Namunasi (Example)</th>
          </tr>
        </thead>
        <tbody>
          {vocab_rows}
        </tbody>
      </table>

      <!-- Exercise A -->
      <div class="exercise-box">
        <div class="exercise-header">
          <div class="exercise-title">
            <span class="badge-letter">A</span>
            <span>{unit['ex_a']['title']}</span>
          </div>
          <span class="exercise-score">Score: ___ / 8</span>
        </div>
        <div class="ex-instruction">{unit['ex_a']['inst']}</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px 8px;">
          {ex_a_items}
        </div>
      </div>

      <!-- Exercise B -->
      <div class="exercise-box" style="margin-bottom: 0;">
        <div class="exercise-header">
          <div class="exercise-title">
            <span class="badge-letter">B</span>
            <span>{unit['ex_b']['title']}</span>
          </div>
          <span class="exercise-score">Score: ___ / 8</span>
        </div>
        <div class="ex-instruction">{unit['ex_b']['inst']}</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px 8px;">
          {ex_b_items}
        </div>
      </div>

      {render_footer(p2_num)}
    </div>
    """

    # Page 3 of Unit: Fun Exercises C, D, E + Star stamp
    ex_c_items = "".join([f'<div class="q-item" style="font-size:7.8pt;"><span class="q-num">{it.split(".")[0]}.</span><span>{it.split(".", 1)[1]}</span></div>' for it in unit["ex_c"]["items"]])
    ex_d_items = "".join([f'<div class="q-item" style="font-size:7.8pt;"><span class="q-num">{it.split(".")[0]}.</span><span>{it.split(".", 1)[1]}</span></div>' for it in unit["ex_d"]["items"]])

    if unit['unit_num'] == 6:
        ex_a_items_u6 = "".join([f'<div class="q-item" style="font-size:7.4pt;"><span class="q-num">{it.split(".")[0]}.</span><span>{it.split(".", 1)[1]}</span></div>' for it in unit["ex_a"]["items"][:4]])
        ex_b_items_u6 = "".join([f'<div class="q-item" style="font-size:7.4pt;"><span class="q-num">{it.split(".")[0]}.</span><span>{it.split(".", 1)[1]}</span></div>' for it in unit["ex_b"]["items"][:4]])
        
        fun_exercises_page = f"""
    <div class="page" id="page-21" data-page="21">
      {render_header("Unit 6 • Exercises &amp; Challenges", 21)}
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-bottom: 5px;">
        <div class="exercise-box" style="margin-bottom:0; padding: 4px 6px;">
          <div class="exercise-header">
            <div class="exercise-title" style="font-size:7.8pt;"><span class="badge-letter">A</span><span>Ex A: Present Simple vs Continuous</span></div>
          </div>
          <div style="display:flex; flex-direction:column; gap:2px;">{ex_a_items_u6}</div>
        </div>
        <div class="exercise-box" style="margin-bottom:0; padding: 4px 6px;">
          <div class="exercise-header">
            <div class="exercise-title" style="font-size:7.8pt;"><span class="badge-letter">B</span><span>Ex B: Put verbs into correct tense</span></div>
          </div>
          <div style="display:flex; flex-direction:column; gap:2px;">{ex_b_items_u6}</div>
        </div>
      </div>

      <div class="exercise-box" style="margin-bottom: 5px; padding: 4px 6px;">
        <div class="exercise-header">
          <div class="exercise-title" style="font-size:7.8pt;"><span class="badge-letter">C</span><span>{unit['ex_c']['title']}</span></div>
          <span class="exercise-score">Score: ___ / 6</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px 8px;">{ex_c_items}</div>
      </div>

      <div class="exercise-box" style="margin-bottom: 5px; padding: 4px 6px;">
        <div class="exercise-header">
          <div class="exercise-title" style="font-size:7.8pt;"><span class="badge-letter">D</span><span>{unit['ex_d']['title']}</span></div>
          <span class="exercise-score">Score: ___ / 6</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px 8px;">{ex_d_items}</div>
      </div>

      <div class="fun-card" style="margin-bottom: 4px; padding: 4px 6px;">
        <div class="fun-title" style="font-size:7.8pt;"><span>🎮</span><span>{unit['ex_e']['title']}</span></div>
        <div style="font-size: 7.5pt; background: white; border: 1px solid #bbf7d0; border-radius: 4px; padding: 3px 6px; line-height: 1.3;">
          {unit['ex_e']['story']}
        </div>
      </div>

      <div class="mascot-stamp" style="margin-top: auto;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 14pt;">🦉</span>
          <div>
            <strong>Professor Owl's Stamp:</strong>
            <span style="color: #64748b; font-size: 7.2pt;">Mavzu 6 to'liq tugatildi!</span>
          </div>
        </div>
        <div class="star-rating">★★★★★ <span style="color: #1e293b; font-size: 7.5pt;">Score: ___ / 20</span></div>
        <div style="font-size: 7.2pt; color: #475569;">Imzo: ___________</div>
      </div>

      {render_footer(21)}
    </div>
    """
    else:
        fun_exercises_page = f"""
    <div class="page" id="page-{p3_num}" data-page="{p3_num}">
      {render_header(f"Unit {unit['unit_num']} • Fun Challenges &amp; Puzzles", p3_num)}
      
      <div class="exercise-box">
        <div class="exercise-header">
          <div class="exercise-title">
            <span class="badge-letter">C</span>
            <span>{unit['ex_c']['title']}</span>
          </div>
          <span class="exercise-score">Score: ___ / 6</span>
        </div>
        <div class="ex-instruction">{unit['ex_c']['inst']}</div>
        <div style="display: flex; flex-direction: column; gap: 2px;">
          {ex_c_items}
        </div>
      </div>

      <div class="exercise-box">
        <div class="exercise-header">
          <div class="exercise-title">
            <span class="badge-letter">D</span>
            <span>{unit['ex_d']['title']}</span>
          </div>
          <span class="exercise-score">Score: ___ / 6</span>
        </div>
        <div class="ex-instruction">{unit['ex_d']['inst']}</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px 8px;">
          {ex_d_items}
        </div>
      </div>

      <!-- Fun Card Exercise E -->
      <div class="fun-card">
        <div class="fun-title">
          <span>🎮</span>
          <span>{unit['ex_e']['title']}</span>
        </div>
        <div class="ex-instruction" style="color: #166534;">{unit['ex_e']['inst']}</div>
        <div style="font-size: 8pt; background: white; border: 1px solid #bbf7d0; border-radius: 5px; padding: 5px 8px; line-height: 1.4;">
          {unit['ex_e']['story']}
        </div>
      </div>

      <!-- Mascot Stamp & Score Box -->
      <div class="mascot-stamp">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 16pt;">🦉</span>
          <div>
            <strong>Professor Owl's Stamp:</strong>
            <span style="color: #64748b; font-size: 7.2pt;">Mavzuni to'liq o'zlashtirdingiz!</span>
          </div>
        </div>
        <div class="star-rating">
          ★★★★★ <span style="color: #1e293b; font-size: 8pt; margin-left: 6px;">Unit Score: ___ / 20</span>
        </div>
        <div style="font-size: 7.5pt; color: #475569;">
          O'qituvchi imzosi: ___________
        </div>
      </div>

      {render_footer(p3_num)}
    </div>
    """

    return grammar_page, vocab_and_core_ex_page, fun_exercises_page

def generate_revision_page(rev_data, page_num):
    sec_html = ""
    for sec in rev_data["sections"]:
        items_html = ""
        is_grid = len(sec["items"]) > 4
        grid_style = "display: grid; grid-template-columns: 1fr 1fr; gap: 2px 8px;" if is_grid else "display: flex; flex-direction: column; gap: 3px;"
        for it in sec["items"]:
            items_html += f'<div class="q-item" style="font-size: 7.8pt;"><span class="q-num">{it.split(".")[0]}.</span><span>{it.split(".", 1)[1]}</span></div>'

        sec_html += f"""
        <div class="exercise-box" style="margin-bottom: 6px;">
          <div class="exercise-header">
            <div class="exercise-title" style="color: #b45309;">
              <span>⭐</span>
              <span>{sec['name']}</span>
            </div>
          </div>
          <div style="{grid_style}">
            {items_html}
          </div>
        </div>
        """

    return f"""
    <div class="page" id="page-{page_num}" data-page="{page_num}">
      {render_header(rev_data["title"], page_num)}
      
      <div class="unit-banner banner-revision">
        <div class="unit-banner-left">
          <div class="unit-badge">R</div>
          <div class="unit-title-group">
            <h1 style="color: #111827;">{rev_data['title']}</h1>
            <p style="color: #374151;">{rev_data['subtitle']}</p>
          </div>
        </div>
        <div class="unit-tag" style="background: rgba(0,0,0,0.1); border-color: rgba(0,0,0,0.2); color: #111827;">{rev_data['tag']}</div>
      </div>

      {sec_html}

      <div class="mascot-stamp" style="background: #fffbeb; border-color: #fde68a;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 16pt;">🐰</span>
          <div>
            <strong>Benny Bunny's Revision Rating:</strong>
            <span style="color: #b45309; font-size: 7.5pt; font-weight: 700;">{rev_data['score_box']}</span>
          </div>
        </div>
        <div class="star-rating">
          ★★★★★
        </div>
      </div>

      {render_footer(page_num)}
    </div>
    """

def generate_final_test_page():
    ft = FINAL_TEST_DATA
    q1 = ft["questions"][:13]
    q2 = ft["questions"][13:]

    def format_q(q_list):
        h = '<div style="display: flex; flex-direction: column; gap: 3.5px;">'
        for q in q_list:
            h += f'<div style="font-size: 7.6pt; background: white; padding: 2.5px 5px; border: 1px solid #cbd5e1; border-radius: 4px;">{q}</div>'
        h += '</div>'
        return h

    return f"""
    <div class="page" id="page-48" data-page="48">
      {render_header("Grand Championship Final Test", 48)}
      
      <div class="unit-banner banner-final">
        <div class="unit-banner-left">
          <div class="unit-badge" style="background: #1e293b; color: white;">🏆</div>
          <div class="unit-title-group">
            <h1>{ft['title']}</h1>
            <p>{ft['subtitle']}</p>
          </div>
        </div>
        <div class="unit-tag">{ft['tag']}</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 6px;">
        {format_q(q1)}
        {format_q(q2)}
      </div>

      <div class="section-card" style="background: #faf5ff; border: 1.5px solid #d8b4fe; padding: 4px 8px; margin-top: auto;">
        <div style="font-weight: 800; color: #6b21a8; font-size: 8pt; display: flex; justify-content: space-between;">
          <span>🎖️ FINAL CHAMPIONSHIP GRADING:</span>
          <span>{ft['grading']}</span>
        </div>
      </div>

      {render_footer(48)}
    </div>
    """

def generate_appendix_page():
    app = APPENDIX_DATA
    v_rows = ""
    # Render verbs into 3 columns for space
    v_half = len(app["verbs"]) // 2
    col1_verbs = app["verbs"][:v_half]
    col2_verbs = app["verbs"][v_half:]

    def make_verb_table(v_list):
        t = '<table class="grammar-table" style="font-size: 7.2pt; margin-bottom: 0;"><thead><tr><th>V1 (Base)</th><th>V2 (Past)</th><th>V3 (Participle)</th><th>Tarjimasi</th></tr></thead><tbody>'
        for v in v_list:
            t += f'<tr><td style="font-weight:700; color:#007791;">{v[0]}</td><td style="font-weight:700; color:#b45309;">{v[1]}</td><td>{v[2]}</td><td style="color:#64748b;">{v[3]}</td></tr>'
        t += '</tbody></table>'
        return t

    formula_rows = ""
    for f in app["formulas"]:
        formula_rows += f"""
        <tr>
          <td style="font-weight:800; color:#007791;">{f[0]}</td>
          <td style="font-weight:700;">{f[1]}</td>
          <td>{f[2]}</td>
          <td>{f[3]}</td>
          <td style="font-style:italic; color:#475569;">{f[4]}</td>
        </tr>
        """

    return f"""
    <div class="page" id="page-49" data-page="49">
      {render_header("Reference Appendix • Irregular Verbs &amp; Formulas", 49)}
      
      <div class="unit-banner" style="background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);">
        <div class="unit-banner-left">
          <div class="unit-badge">✦</div>
          <div class="unit-title-group">
            <h1>{app['title']}</h1>
            <p>{app['subtitle']}</p>
          </div>
        </div>
        <div class="unit-tag">{app['tag']}</div>
      </div>

      <div style="font-weight: 800; color: #0f766e; font-size: 8.5pt; margin-bottom: 2px;">
        1. NOTO'G'RI FE'LLARNING OLTIN JADVALI (Golden Irregular Verbs List)
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 6px;">
        {make_verb_table(col1_verbs)}
        {make_verb_table(col2_verbs)}
      </div>

      <div style="font-weight: 800; color: #0f766e; font-size: 8.5pt; margin-bottom: 2px;">
        2. 7 TA ASOSIY ZAMONNING YAGONA FORMULALAR XARITASI (Grammar Formulas Cheat Sheet)
      </div>
      <table class="grammar-table" style="font-size: 7.2pt; margin-bottom: 0;">
        <thead>
          <tr>
            <th>Zamon nomi</th>
            <th>Darak (+)</th>
            <th>Inkor (-)</th>
            <th>So'roq (?)</th>
            <th>Signal so'zlar</th>
          </tr>
        </thead>
        <tbody>
          {formula_rows}
        </tbody>
      </table>

      {render_footer(49)}
    </div>
    """

def generate_answer_key_and_cert_page():
    ak = ANSWER_KEY_DATA
    answers_html = ""
    for a in ak["answers"]:
        answers_html += f'<div style="font-size: 7.1pt; border-bottom: 1px dotted #cbd5e1; padding: 1px 0;">{a}</div>'

    return f"""
    <div class="page" id="page-50" data-page="50" style="justify-content: space-between;">
      {render_header("Answer Key &amp; Certificate of Achievement", 50)}
      
      <div class="unit-banner" style="background: linear-gradient(135deg, #15803d 0%, #166534 100%); margin-bottom: 4px;">
        <div class="unit-banner-left">
          <div class="unit-badge">✔</div>
          <div class="unit-title-group">
            <h1>{ak['title']}</h1>
            <p>{ak['subtitle']}</p>
          </div>
        </div>
        <div class="unit-tag">{ak['tag']}</div>
      </div>

      <!-- Answers scroll / compact box -->
      <div class="section-card" style="padding: 4px 6px; margin-bottom: 6px; max-height: 140mm; overflow: hidden;">
        <div style="font-weight: 800; color: #166534; font-size: 7.8pt; margin-bottom: 2px;">
          JAVOBLAR KALITI (O'quvchi va o'qituvchilar uchun mustaqil tekshirish javoblari):
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1px 8px;">
          {answers_html}
        </div>
      </div>

      <!-- Certificate of Grammar Mastery -->
      <div style="border: 4px double #d97706; background: #fffdf5; border-radius: 8px; padding: 8px 12px; text-align: center; margin-top: auto; box-shadow: 0 4px 12px rgba(217, 119, 6, 0.15);">
        <div style="font-size: 8pt; font-weight: 800; color: #b45309; letter-spacing: 2px;">OFFICIAL CERTIFICATE OF ACHIEVEMENT</div>
        <div style="font-size: 14pt; font-weight: 900; color: #1e293b; margin: 2px 0;">FAXRIY YORLIQ • CERTIFICATE</div>
        <div style="font-size: 7.8pt; color: #4b5563;">
          Ushbu sertifikat 4-sinf o'quvchisi __________________________________________ ga<br>
          <strong>Destination English Grammar &amp; Vocabulary (4-sinf)</strong> kursining barcha 50 betlik materiallarini, 14 ta zamon qoidalarini va 140 ta oltin lug'atni a'lo darajada o'zlashtirgani uchun berildi!
        </div>
        
        <div style="display: flex; justify-content: space-around; align-items: center; margin-top: 8px; font-size: 7.8pt;">
          <div>
            <div>Sana: _________________</div>
          </div>
          <div style="font-size: 20pt;">🏅</div>
          <div>
            <div>O'qituvchi: _________________</div>
          </div>
        </div>
      </div>

      {render_footer(50)}
    </div>
    """

def generate_cloze_story_page(item):
    p = item["page_num"]
    if item.get("is_intro"):
        rules_html = ""
        for r_title, r_desc in item["rules"]:
            rules_html += f"""
            <div style="background: white; border-left: 4px solid #007791; padding: 6px 10px; border-radius: 0 6px 6px 0; margin-bottom: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <div style="font-weight: 800; color: #007791; font-size: 8.5pt;">{r_title}</div>
              <div style="font-size: 8pt; color: #334155;">{r_desc}</div>
            </div>
            """
        return f"""
        <div class="page" id="page-{p}" data-page="{p}">
          {render_header("Section 4 • Reading &amp; Cloze Masterwork", p)}
          <div class="unit-banner" style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);">
            <div class="unit-banner-left">
              <div class="unit-badge" style="background: #fef08a; color: #854d0e;">4</div>
              <div class="unit-title-group">
                <h1>{item['title']}</h1>
                <p>{item['subtitle']}</p>
              </div>
            </div>
            <div class="unit-tag">{item['tag']}</div>
          </div>
          <div class="tip-box" style="margin-bottom: 8px;">
            <span class="tip-icon">🌟</span>
            <div class="tip-content">{item['banner_note']}</div>
          </div>
          <div class="section-card" style="padding: 8px 12px; margin-bottom: 8px;">
            <div style="font-weight: 900; color: #0f766e; font-size: 9pt; margin-bottom: 6px;">
              📖 MATNLARDA ZAMONLARNI TO'G'RI QO'LLASH BO'YICHA 4 TA ASOSIY MASLAHAT:
            </div>
            {rules_html}
          </div>
          <div class="mascot-stamp" style="margin-top: auto; background: #f0fdfa; border-color: #5eead4;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 16pt;">🦉</span>
              <div>
                <strong>Professor Owl's Advice:</strong>
                <span style="color: #0f766e; font-size: 7.5pt;">Har bir hikoyani diqqat bilan o'qing va qavsdagi fe'lni to'g'ri shaklga qo'ying!</span>
              </div>
            </div>
          </div>
          {render_footer(p)}
        </div>
        """

    if item.get("is_answers"):
        ans_rows = "".join([f'<div style="border-bottom: 1px dotted #cbd5e1; padding: 2.5px 0; font-size: 7.2pt;"><strong>{a[0]}:</strong> {a[1]}</div>' for a in item["answers_list"]])
        return f"""
        <div class="page" id="page-{p}" data-page="{p}">
          {render_header("Cloze Stories Answer Key", p)}
          <div class="unit-banner" style="background: linear-gradient(135deg, #15803d 0%, #166534 100%);">
            <div class="unit-banner-left">
              <div class="unit-badge">✔</div>
              <div class="unit-title-group">
                <h1>{item['title']}</h1>
                <p>{item['subtitle']}</p>
              </div>
            </div>
            <div class="unit-tag">{item['tag']}</div>
          </div>
          <div class="section-card" style="padding: 6px 10px; max-height: 215mm; overflow: hidden;">
            <div style="font-weight: 800; color: #166534; font-size: 8pt; margin-bottom: 4px;">
              20 TA QO'SHIMCHA SAHIFADAGI BARCHA MATNLAR JAVOBLARI KALITI:
            </div>
            {ans_rows}
          </div>
          <div class="mascot-stamp" style="margin-top: auto;">
            <div class="star-rating">★★★★★ <span>Barcha 17 ta matn tekshirildi!</span></div>
          </div>
          {render_footer(p)}
        </div>
        """

    if item.get("is_cert"):
        return f"""
        <div class="page" id="page-{p}" data-page="{p}" style="justify-content: space-between; border: 8px double #d97706; background: #fffdf5;">
          {render_header("Grand Master Certificate of Achievement", p)}
          <div style="text-align: center; margin: 15px 0;">
            <div style="font-size: 9pt; font-weight: 800; color: #b45309; letter-spacing: 2px;">MACMILLAN &amp; DESTINATION INSPIRED</div>
            <h1 style="font-size: 26pt; font-weight: 950; color: #1e293b; margin: 6px 0;">GRAND MASTER DIPLOMA</h1>
            <div style="font-size: 13pt; color: #d97706; font-weight: 800;">70 BETLIK TO'LIQ KURS BITIRUVCHISI FAXRIY YORLIG'I</div>
          </div>

          <div style="text-align: center; margin: 20px 0;">
            <p style="font-size: 11pt; color: #475569;">Ushbu maxsus oltin diplom 4-sinf o'quvchisi:</p>
            <div style="font-size: 22pt; font-weight: 900; color: #007791; border-bottom: 3px solid #d97706; display: inline-block; padding: 4px 40px; margin: 8px 0;">
              _____________________________________________
            </div>
            <p style="font-size: 10pt; color: #334155; max-width: 550px; margin: 12px auto; line-height: 1.6;">
              Ingliz tili grammatikasining barcha 14 ta zamonini, 140 ta oltin lug'atni hamda kitobdagi barcha 70 betlik topshiriq va 17 ta katta matnlarni a'lo darajada bajargani uchun taqdirlanadi!
            </p>
          </div>

          <div style="display: flex; justify-content: space-around; align-items: center; border-top: 2px dashed #cbd5e1; padding-top: 20px; margin-top: auto;">
            <div style="text-align: center;">
              <div>Sana: _______________</div>
              <div style="font-size: 8pt; color: #64748b;">Toshkent, 2026</div>
            </div>
            <div style="font-size: 40pt; line-height: 1;">🏅</div>
            <div style="text-align: center;">
              <div>O'qituvchi: _______________</div>
              <div style="font-size: 8pt; color: #64748b;">Grand Master Seal</div>
            </div>
          </div>
          {render_footer(p)}
        </div>
        """

    # Story page (52-68)
    verbs_html = "".join([f'<div>{v}</div>' for v in item["verbs"]])
    return f"""
    <div class="page" id="page-{p}" data-page="{p}">
      {render_header(f"{item['unit_ref']} • Reading Cloze Story", p)}
      <div class="unit-banner" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);">
        <div class="unit-banner-left">
          <div class="unit-badge" style="background: white; color: #0369a1;">{p}</div>
          <div class="unit-title-group">
            <h1>{item['title']}</h1>
            <p>Zamon diqqat markazida: {item['tense_focus']}</p>
          </div>
        </div>
        <div class="unit-tag">{item['unit_ref']}</div>
      </div>

      <div class="tip-box" style="margin-bottom: 5px; padding: 4px 8px;">
        <span class="tip-icon">💡</span>
        <div class="tip-content">
          <strong>Topshiriq:</strong> {item['intro']}
        </div>
      </div>

      <!-- Story Box -->
      <div class="section-card" style="padding: 8px 10px; margin-bottom: 6px; border: 1.5px solid #0284c7; background: #fff;">
        <div style="font-size: 8.2pt; line-height: 1.55; color: #1e293b; white-space: pre-line;">
          {item['story']}
        </div>
      </div>

      <!-- Verbs reference list -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px; font-size: 7.2pt; background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 5px; padding: 4px 6px; margin-bottom: 5px;">
        {verbs_html}
      </div>

      <div class="mascot-stamp" style="margin-top: auto; background: #f0fdfa; border-color: #5eead4;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 16pt;">⏱️</span>
          <div>
            <strong>Story {p - 51} Score:</strong>
            <span style="color: #0f766e; font-size: 7.5pt; font-weight:700;">Score: ___ / {len(item['verbs'])} ball</span>
          </div>
        </div>
        <div class="star-rating">
          ★★★★★ <span style="color:#334155; font-size:7.5pt;">({len(item['verbs'])} ta fe'l)</span>
        </div>
        <div style="font-size: 7.2pt; color: #475569;">
          O'qituvchi imzosi: ___________
        </div>
      </div>
      {render_footer(p)}
    </div>
    """

def build_full_html():
    print("Building full 70-page HTML...")
    
    pages = []
    # Page 1: Cover
    pages.append(generate_cover_page())
    
    # Page 2: Table of Contents & Study Guide
    pages.append(generate_contents_page())
    
    # Page 3: Starter Diagnostic Test
    pages.append(generate_starter_test_page())
    
    # Pages 4 to 21: Units 1 to 6 (6 units * 3 pages = 18 pages)
    current_page = 4
    for unit in UNITS_PART1:
        p_grammar, p_vocab, p_fun = generate_unit_pages(unit, current_page)
        pages.append(p_grammar)
        pages.append(p_vocab)
        pages.append(p_fun)
        current_page += 3
        
    # Page 22: Revision 1 (Units 1 - 6 Review)
    pages.append(generate_revision_page(REVISION_1_DATA, 22))
    current_page = 23
    
    # Pages 23 to 37: Units 7 to 11 (5 units * 3 pages = 15 pages)
    for unit in UNITS_PART2:
        p_grammar, p_vocab, p_fun = generate_unit_pages(unit, current_page)
        pages.append(p_grammar)
        pages.append(p_vocab)
        pages.append(p_fun)
        current_page += 3
        
    # Page 38: Revision 2 (Units 7 - 11 Review)
    pages.append(generate_revision_page(REVISION_2_DATA, 38))
    current_page = 39
    
    # Pages 39 to 47: Units 12 to 14 (3 units * 3 pages = 9 pages)
    for unit in UNITS_PART3:
        p_grammar, p_vocab, p_fun = generate_unit_pages(unit, current_page)
        pages.append(p_grammar)
        pages.append(p_vocab)
        pages.append(p_fun)
        current_page += 3
        
    # Page 48: Final Championship Test
    pages.append(generate_final_test_page())
    
    # Page 49: Appendix: Irregular Verbs & Formulas Cheat Sheet
    pages.append(generate_appendix_page())
    
    # Page 50: Answer Key & Certificate of Achievement
    pages.append(generate_answer_key_and_cert_page())
    
    # Pages 51 to 70: 20 Dedicated Reading & Cloze Story Pages
    for item in CLOZE_STORIES_DATA:
        pages.append(generate_cloze_story_page(item))

    print(f"Total pages rendered: {len(pages)}")
    assert len(pages) == 70, f"Expected 70 pages, but got {len(pages)}"

    # Navigation options for toolbar
    page_options = "".join([f'<option value="page-{i}">Sahifa {i} of 70</option>' for i in range(1, 71)])

    js_script = """
  <script>
    let currentPage = 1;
    const totalPages = 70;

    function jumpToPage(pageId) {
      const el = document.getElementById(pageId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const num = parseInt(pageId.replace('page-', ''));
        currentPage = num;
        document.getElementById('pageSelect').value = pageId;
      }
    }

    function jumpPrev() {
      if (currentPage > 1) {
        jumpToPage('page-' + (currentPage - 1));
      }
    }

    function jumpNext() {
      if (currentPage < totalPages) {
        jumpToPage('page-' + (currentPage + 1));
      }
    }

    // Update dropdown on scroll
    window.addEventListener('scroll', () => {
      const pages = document.querySelectorAll('.page');
      let current = 'page-1';
      pages.forEach(p => {
        const rect = p.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          current = p.id;
        }
      });
      const sel = document.getElementById('pageSelect');
      if (sel) {
        sel.value = current;
      }
      currentPage = parseInt(current.replace('page-', ''));
    });
  </script>
"""

    joined_pages = "".join(pages)

    html_content = f"""<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DESTINATION GRAMMAR &amp; VOCABULARY - GRADE 4 (70 Betlik To'liq Kitob)</title>
  <style>
    {CSS_CONTENT}
  </style>
</head>
<body>

  <!-- Screen Navigation Toolbar -->
  <div class="screen-toolbar no-print">
    <div class="toolbar-title">
      <span style="font-size: 18px;">📘</span>
      <span>DESTINATION GRAMMAR 4 • 70 BETLIK TO'LIQ KITOBLAR TO'PLAMI</span>
    </div>
    
    <div class="toolbar-actions">
      <a href="web_app.html" class="btn-nav" style="background:#10b981; text-decoration:none;">🌐 Interaktiv Veb-Sayt</a>
      <button class="btn-nav" onclick="jumpPrev()">◀ Oldingi</button>
      <select class="page-selector" id="pageSelect" onchange="jumpToPage(this.value)">
        {page_options}
      </select>
      <button class="btn-nav" onclick="jumpNext()">Keyingi ▶</button>
      <button class="btn-nav btn-print" onclick="window.print()">🖨️ Chop etish / PDF ga saqlash</button>
    </div>
  </div>

  <!-- Book Container -->
  <div class="book-container">
    {joined_pages}
  </div>

  <!-- Interactive Navigation Script -->
  {js_script}
</body>
</html>
"""
    return html_content

def main():
    html = build_full_html()
    output_html_path = os.path.join(r"c:\Users\hecker_uz\Desktop\kitob", "index.html")
    with open(output_html_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Successfully generated HTML book at: {output_html_path}")
    
    # Generate PDF using Microsoft Edge headless
    pdf_path = os.path.join(r"c:\Users\hecker_uz\Desktop\kitob", "Destination_English_Grammar_Grade4.pdf")
    print(f"Generating PDF via Microsoft Edge: {pdf_path}...")
    edge_cmd = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        "--headless",
        "--disable-gpu",
        "--run-all-compositor-stages-before-draw",
        f"--print-to-pdf={pdf_path}",
        f"file:///{output_html_path.replace(os.sep, '/')}"
    ]
    try:
        res = subprocess.run(edge_cmd, capture_output=True, text=True, timeout=90)
        print("Edge output:", res.stdout, res.stderr)
        if os.path.exists(pdf_path):
            size_kb = os.path.getsize(pdf_path) / 1024
            print(f"SUCCESS! PDF created: {pdf_path} ({size_kb:.1f} KB)")
        else:
            print("Warning: PDF file was not created immediately, checking...")
    except Exception as e:
        print(f"Edge PDF generation error: {e}")

if __name__ == "__main__":
    main()
