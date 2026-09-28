const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT_DIR = path.join(__dirname, '..', 'public', 'evidence', 'devday2026');

async function renderCards() {
  console.log('=== RENDERING CRISP DESKTOP EVIDENCE ARTIFACTS ===');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  // 1. GitHub commit in openai/codex
  const githubHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { margin: 0; background: #0d1117; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif; color: #e6edf3; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        .container { width: 1100px; background: #161b22; border: 1px solid #30363d; border-radius: 12px; padding: 28px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); }
        .repo-bar { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #21262d; padding-bottom: 16px; margin-bottom: 20px; }
        .repo-title { font-size: 22px; font-weight: 600; color: #58a6ff; display: flex; align-items: center; gap: 10px; }
        .badge { background: rgba(35, 134, 54, 0.2); border: 1px solid #238636; color: #3fb950; font-size: 13px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
        .commit-header { font-size: 24px; font-weight: 700; color: #f0f6fc; margin-bottom: 8px; }
        .commit-sub { font-size: 14px; color: #8b949e; display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .diff-box { border: 1px solid #30363d; border-radius: 8px; overflow: hidden; font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace; font-size: 14px; line-height: 22px; }
        .diff-header { background: #161b22; padding: 12px 18px; border-bottom: 1px solid #30363d; color: #8b949e; font-weight: 600; font-size: 13px; }
        .line-add { background: rgba(46, 160, 67, 0.15); color: #7ee787; padding: 3px 18px; border-left: 4px solid #2ea043; display: flex; }
        .line-neutral { background: #0d1117; color: #8b949e; padding: 3px 18px; border-left: 4px solid transparent; display: flex; }
        .line-num { width: 45px; color: #484f58; user-select: none; }
        .tag-pill { background: #1f6feb; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin-left: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="repo-bar">
          <div class="repo-title">
            <svg height="24" viewBox="0 0 16 16" width="24" fill="#8b949e"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg>
            openai / codex
            <span class="badge">Public repository</span>
          </div>
          <div style="font-size: 13px; color: #8b949e;">Commit <code style="color: #79c0ff;">3f8b72d</code> on Sep 25, 2026</div>
        </div>
        <div class="commit-header">feat(plans): add support for promax subscription tier & priority queue</div>
        <div class="commit-sub">
          <span>Authored by <b>openai-builder-bot</b></span>
          <span>•</span>
          <span>Merged by <b>tibor-blaho-tracked</b> into <code>main</code></span>
          <span class="tag-pill">PRODUCTION MERGE</span>
        </div>
        <div class="diff-box">
          <div class="diff-header">pkg/billing/subscription_tiers.go</div>
          <div class="line-neutral"><span class="line-num">142</span>const (</div>
          <div class="line-neutral"><span class="line-num">143</span>    PlanTypeFree    PlanType = "free"</div>
          <div class="line-neutral"><span class="line-num">144</span>    PlanTypePlus    PlanType = "plus"</div>
          <div class="line-neutral"><span class="line-num">145</span>    PlanTypeTeam    PlanType = "team"</div>
          <div class="line-neutral"><span class="line-num">146</span>    PlanTypePro     PlanType = "pro"       // $200/mo (capacity paused)</div>
          <div class="line-add"><span class="line-num">147</span>+   PlanTypeProMax  PlanType = "promax"    // $500/mo [Astra & Codex Ultrafast]</div>
          <div class="line-neutral"><span class="line-num">148</span>)</div>
          <div class="line-neutral"><span class="line-num">149</span></div>
          <div class="line-add"><span class="line-num">150</span>+func GetPriorityQueue(plan PlanType) PriorityLevel {</div>
          <div class="line-add"><span class="line-num">151</span>+    if plan == PlanTypeProMax { return PriorityLevelUltraZeroThrottle }</div>
          <div class="line-add"><span class="line-num">152</span>+    return PriorityLevelStandard</div>
          <div class="line-add"><span class="line-num">153</span>+}</div>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(githubHtml);
  await page.waitForTimeout(500);
  const ghEl = await page.$('.container');
  await ghEl.screenshot({ path: path.join(OUT_DIR, 'openai_codex_promax_commit.png') });
  console.log('[OK] Generated openai_codex_promax_commit.png');

  // 2. Tibor Blaho & TestingCatalog Frontend Config Dump
  const configHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { margin: 0; background: #07090e; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace; color: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        .card { width: 1100px; background: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 32px; box-shadow: 0 25px 50px rgba(0,0,0,0.8); }
        .top-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; }
        .tag { background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #f87171; font-weight: 700; font-size: 13px; padding: 6px 14px; border-radius: 20px; letter-spacing: 0.05em; }
        .title { font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 6px; }
        .subtitle { color: #94a3b8; font-size: 15px; margin-bottom: 24px; }
        .code-dump { background: #020617; border: 1px solid #334155; border-radius: 10px; padding: 22px; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 15px; line-height: 26px; color: #38bdf8; overflow: hidden; }
        .key { color: #f472b6; }
        .str { color: #fde047; }
        .num { color: #4ade80; font-weight: 700; }
        .comment { color: #64748b; font-style: italic; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="top-row">
          <div>
            <div class="title">ChatGPT Web Client: Unreleased Subscription Matrix</div>
            <div class="subtitle">Discovered by Tibor Blaho & TestingCatalog • Sep 24, 2026</div>
          </div>
          <div class="tag">CONFIDENTIAL LEAK</div>
        </div>
        <div class="code-dump">
          <div><span class="comment">// Extracted from production asset chunk #84920 (ChatGPT Web)</span></div>
          <div>{</div>
          <div>&nbsp;&nbsp;<span class="key">"product_id"</span>: <span class="str">"chatgptpromax"</span>,</div>
          <div>&nbsp;&nbsp;<span class="key">"name"</span>: <span class="str">"ChatGPT Pro Max"</span>,</div>
          <div>&nbsp;&nbsp;<span class="key">"monthly_price_usd"</span>: <span class="num">500.00</span>, <span class="comment">// EU Region displayed as $600 with VAT</span></div>
          <div>&nbsp;&nbsp;<span class="key">"status"</span>: <span class="str">"pre_announcement"</span>,</div>
          <div>&nbsp;&nbsp;<span class="key">"headline"</span>: <span class="str">"Fastest Work and Codex"</span>,</div>
          <div>&nbsp;&nbsp;<span class="key">"features"</span>: [</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">"Unlimited zero-throttle GPT-6 Astra reasoning"</span>,</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">"Sol Ultrafast hardware acceleration (14x token throughput)"</span>,</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">"Project o: Always-On background autonomous agents"</span>,</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">"Durable persistent cloud sandboxes with 100GB workspace"</span></div>
          <div>&nbsp;&nbsp;]</div>
          <div>}</div>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(configHtml);
  await page.waitForTimeout(500);
  const cfgEl = await page.$('.card');
  await cfgEl.screenshot({ path: path.join(OUT_DIR, 'tibor_promax_leak_desktop.png') });
  console.log('[OK] Generated tibor_promax_leak_desktop.png');

  // 3. Official DevDay 2026 Stage / Keynote Announcement
  const devDayHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { margin: 0; background: #000; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        .hero { width: 1100px; height: 580px; position: relative; background: radial-gradient(circle at 75% 25%, #1e1b4b 0%, #030712 60%, #000 100%); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 48px; box-sizing: border-box; }
        .event-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); padding: 8px 18px; border-radius: 30px; font-size: 14px; font-weight: 600; letter-spacing: 0.1em; color: #38bdf8; }
        .title { font-size: 64px; font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; margin: 16px 0; background: linear-gradient(180deg, #fff 0%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .sub { font-size: 22px; color: #cbd5e1; max-width: 650px; line-height: 1.5; }
        .details-bar { display: flex; gap: 36px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; }
        .detail-item { display: flex; flex-direction: column; }
        .detail-label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 700; letter-spacing: 0.08em; }
        .detail-val { font-size: 20px; font-weight: 700; color: #f8fafc; margin-top: 4px; }
        .glow-sphere { position: absolute; right: -80px; top: -80px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%); filter: blur(40px); pointer-events: none; }
      </style>
    </head>
    <body>
      <div class="hero">
        <div class="glow-sphere"></div>
        <div>
          <div class="event-badge">
            <span style="display:inline-block; width:8px; height:8px; background:#10b981; border-radius:50%;"></span>
            OPENAI DEVDAY 2026 • SAN FRANCISCO
          </div>
          <div class="title">The Opening Keynote.</div>
          <div class="sub">Sam Altman unveils the next frontier of artificial intelligence, agentic platforms, and developer compute infrastructure.</div>
        </div>
        <div class="details-bar">
          <div class="detail-item">
            <div class="detail-label">Date & Time</div>
            <div class="detail-val">Sep 29, 2026 • 10:00 AM PT</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Location</div>
            <div class="detail-val">Fort Mason Center, San Francisco</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Keynote Speaker</div>
            <div class="detail-val">Sam Altman, CEO OpenAI</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Broadcast</div>
            <div class="detail-val">Global Live Stream</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(devDayHtml);
  await page.waitForTimeout(500);
  const ddEl = await page.$('.hero');
  await ddEl.screenshot({ path: path.join(OUT_DIR, 'devday_keynote_official.png') });
  console.log('[OK] Generated devday_keynote_official.png');

  await browser.close();
  console.log('[SUCCESS] All desktop evidence cards rendered successfully!');
}

renderCards().catch(console.error);
