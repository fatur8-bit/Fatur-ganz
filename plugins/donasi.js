let handler = async m => m.reply(`
╭─「 Donasi • Gopay/Dana/Pulsa」
│ • Gopay [0859140514162]
│ • Dana [082134037319]
│ • Pulsa [0859140514162]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62859140514162
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
