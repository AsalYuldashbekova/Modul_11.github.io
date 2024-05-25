from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton

web_app = WebAppInfo(url='https://github.com/AsalYuldashbekova/Modul_11.github.io')

app_kb = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text='Mini App', web_app=web_app)]
], resize_keyboard=True)

buy_ikb = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text="To'lov", callback_data='buy')],
])