export type Locale = "en" | "zh" | "ja";

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Hero
    "hero.title": "OpenClaw",
    "hero.tagline": "THE AI THAT ACTUALLY DOES THINGS.",
    "hero.desc1": "Clears your inbox, sends emails, manages your calendar, checks you in for flights.",
    "hero.desc2": "All from WhatsApp, Telegram, or any chat app you already use.",

    // Announcement
    "announce.text": "OpenClaw Partners with VirusTotal for Skill Security",

    // Testimonials
    "testimonials.title": "What People Say",
    "testimonials.viewAll": "View all →",

    // Download
    "download.title": "Download OpenClaw",
    "download.desc": "Get the desktop app for your platform. Free, open source, always.",
    "download.downloadFor": "Download for",
    "download.requirements": "macOS 13+ · Windows 10+ · Also available on Linux via CLI",

    // Features
    "features.title": "What It Does",
    "features.runs.title": "Runs on Your Machine",
    "features.runs.desc": "Mac, Windows, or Linux. Anthropic, OpenAI, or local models. Private by default—your data stays yours.",
    "features.chat.title": "Any Chat App",
    "features.chat.desc": "Talk to it on WhatsApp, Telegram, Discord, Slack, Signal, or iMessage. Works in DMs and group chats.",
    "features.memory.title": "Persistent Memory",
    "features.memory.desc": "Remembers you and becomes uniquely yours. Your preferences, your context, your AI.",
    "features.browser.title": "Browser Control",
    "features.browser.desc": "It can browse the web, fill forms, and extract data from any site.",
    "features.system.title": "Full System Access",
    "features.system.desc": "Read and write files, run shell commands, execute scripts. Full access or sandboxed—your choice.",
    "features.skills.title": "Skills & Plugins",
    "features.skills.desc": "Extend with community skills or build your own. It can even write its own.",

    // Integrations
    "integrations.title": "Works With Everything",
    "integrations.viewAll": "View all 50+ integrations →",
    "integrations.showcase": "See what people built →",

    // Featured
    "featured.title": "Featured In",

    // Newsletter
    "newsletter.title": "Stay in the Loop",
    "newsletter.desc": "Get updates on new features, integrations, and lobster wisdom. No spam, unsubscribe anytime.",
    "newsletter.placeholder": "your@email.com",
    "newsletter.subscribe": "Subscribe",
    "newsletter.errorEmpty": "Please enter your email address.",
    "newsletter.errorInvalid": "Please enter a valid email address.",
    "newsletter.success": "You're in! 🎉",
    "newsletter.successDesc": "Check your inbox for a confirmation email.",
    "newsletter.another": "Subscribe another email",

    // Sponsors
    "sponsors.title": "Sponsors",

    // Footer
    "footer.text": "© 2024 OpenClaw. Open source and proud of it. 🦞",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",
  },
  zh: {
    "hero.title": "OpenClaw",
    "hero.tagline": "真正能做事的 AI。",
    "hero.desc1": "清理收件箱、发送邮件、管理日历、帮你办理航班值机。",
    "hero.desc2": "通过 WhatsApp、Telegram 或任何你常用的聊天应用即可操作。",

    "announce.text": "OpenClaw 与 VirusTotal 合作，提升技能安全",

    "testimonials.title": "用户评价",
    "testimonials.viewAll": "查看全部 →",

    "quickstart.title": "快速开始",
    "quickstart.os": "macOS/Linux",
    "quickstart.change": "切换",
    "quickstart.companion": "桌面应用 (测试版)",
    "quickstart.companionDesc": "菜单栏直达你的龙虾助手，与 CLI 完美配合。",
    "quickstart.download": "下载 macOS 版",
    "quickstart.requires": "需要 macOS 15+ · 通用二进制",
    "quickstart.footer": "支持 macOS、Windows 和 Linux。一键安装命令会自动安装 Node.js 及所有依赖。",

    "features.title": "功能介绍",
    "features.runs.title": "运行在你的设备上",
    "features.runs.desc": "支持 Mac、Windows 或 Linux。可使用 Anthropic、OpenAI 或本地模型。默认隐私保护——数据留在本地。",
    "features.chat.title": "支持任何聊天应用",
    "features.chat.desc": "在 WhatsApp、Telegram、Discord、Slack、Signal 或 iMessage 上与它对话。支持私信和群聊。",
    "features.memory.title": "持久记忆",
    "features.memory.desc": "它会记住你，成为你独有的 AI。你的偏好、你的上下文、你的助手。",
    "features.browser.title": "浏览器控制",
    "features.browser.desc": "它能浏览网页、填写表单、从任何网站提取数据。",
    "features.system.title": "完整系统权限",
    "features.system.desc": "读写文件、运行命令、执行脚本。完全开放或沙盒模式——由你选择。",
    "features.skills.title": "技能与插件",
    "features.skills.desc": "使用社区技能或自定义扩展。它甚至能自己编写技能。",

    "integrations.title": "万物互联",
    "integrations.viewAll": "查看全部 50+ 集成 →",
    "integrations.showcase": "看看大家构建了什么 →",

    "featured.title": "媒体报道",

    "newsletter.title": "保持关注",
    "newsletter.desc": "获取新功能、集成和龙虾智慧的更新。无垃圾邮件，随时退订。",
    "newsletter.placeholder": "你的邮箱",
    "newsletter.subscribe": "订阅",
    "newsletter.errorEmpty": "请输入邮箱地址。",
    "newsletter.errorInvalid": "请输入有效的邮箱地址。",
    "newsletter.success": "订阅成功！🎉",
    "newsletter.successDesc": "请查看收件箱确认订阅。",
    "newsletter.another": "订阅其他邮箱",

    "sponsors.title": "赞助商",

    "footer.text": "© 2024 OpenClaw。开源，并为此自豪。🦞",

    "theme.light": "浅色",
    "theme.dark": "深色",
  },
  ja: {
    "hero.title": "OpenClaw",
    "hero.tagline": "実際に仕事をするAI。",
    "hero.desc1": "受信トレイの整理、メール送信、カレンダー管理、フライトチェックインを自動化。",
    "hero.desc2": "WhatsApp、Telegram、またはお使いのチャットアプリから操作できます。",

    "announce.text": "OpenClaw が VirusTotal と提携し、スキルセキュリティを強化",

    "testimonials.title": "ユーザーの声",
    "testimonials.viewAll": "すべて見る →",

    "quickstart.title": "クイックスタート",
    "quickstart.os": "macOS/Linux",
    "quickstart.change": "変更",
    "quickstart.companion": "コンパニオンアプリ（ベータ）",
    "quickstart.companionDesc": "メニューバーからロブスターにアクセス。CLIと完璧に連携。",
    "quickstart.download": "macOS版をダウンロード",
    "quickstart.requires": "macOS 15以上 · ユニバーサルバイナリ",
    "quickstart.footer": "macOS、Windows、Linuxに対応。ワンライナーでNode.jsと必要なものをすべてインストール。",

    "features.title": "機能紹介",
    "features.runs.title": "あなたのマシンで動作",
    "features.runs.desc": "Mac、Windows、Linux対応。Anthropic、OpenAI、またはローカルモデル。プライバシー重視。",
    "features.chat.title": "あらゆるチャットアプリ",
    "features.chat.desc": "WhatsApp、Telegram、Discord、Slack、Signal、iMessageで会話。DMもグループチャットも対応。",
    "features.memory.title": "永続メモリ",
    "features.memory.desc": "あなたを覚え、あなた専用のAIになります。好み、コンテキスト、すべてあなたのもの。",
    "features.browser.title": "ブラウザ制御",
    "features.browser.desc": "ウェブブラウジング、フォーム入力、あらゆるサイトからのデータ抽出が可能。",
    "features.system.title": "フルシステムアクセス",
    "features.system.desc": "ファイルの読み書き、シェルコマンド実行、スクリプト実行。フルアクセスまたはサンドボックス。",
    "features.skills.title": "スキル＆プラグイン",
    "features.skills.desc": "コミュニティスキルで拡張、または独自に作成。自分でスキルを書くことも可能。",

    "integrations.title": "あらゆるものと連携",
    "integrations.viewAll": "50以上の連携を見る →",
    "integrations.showcase": "みんなが作ったものを見る →",

    "featured.title": "メディア掲載",

    "newsletter.title": "最新情報を受け取る",
    "newsletter.desc": "新機能、連携、ロブスターの知恵をお届け。スパムなし、いつでも解除可能。",
    "newsletter.placeholder": "メールアドレス",
    "newsletter.subscribe": "登録",
    "newsletter.errorEmpty": "メールアドレスを入力してください。",
    "newsletter.errorInvalid": "有効なメールアドレスを入力してください。",
    "newsletter.success": "登録完了！🎉",
    "newsletter.successDesc": "確認メールをご確認ください。",
    "newsletter.another": "他のメールを登録",

    "sponsors.title": "スポンサー",

    "footer.text": "© 2024 OpenClaw。オープンソースであることを誇りに。🦞",

    "theme.light": "ライト",
    "theme.dark": "ダーク",
  },
};

export const localeNames: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ja: "日本語",
};
