export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, company, phone, email, comment, source } = req.body || {};

    if (!name || !phone || !email) {
        return res.status(400).json({ error: 'Обязательные поля: ФИО, телефон, email' });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return res.status(500).json({ error: 'Telegram credentials not configured' });
    }

    const esc = (s) => String(s || '').replace(/[<>&]/g, (c) => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));

    const text = [
        `<b>🟢 Новая заявка — AI Builder</b>`,
        ``,
        `<b>Источник:</b> ${esc(source) || '—'}`,
        `<b>ФИО:</b> ${esc(name)}`,
        `<b>Компания:</b> ${esc(company) || '—'}`,
        `<b>Телефон:</b> ${esc(phone)}`,
        `<b>Email:</b> ${esc(email)}`,
        comment ? `\n<b>Комментарий:</b>\n${esc(comment)}` : ''
    ].filter(Boolean).join('\n');

    try {
        const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
        });
        const data = await tgRes.json();
        if (!data.ok) {
            return res.status(500).json({ error: 'Telegram error', detail: data.description });
        }
        return res.status(200).json({ ok: true });
    } catch (e) {
        return res.status(500).json({ error: 'Network error', detail: e.message });
    }
}
