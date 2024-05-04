from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

web_app = WebAppInfo(url="https://asalyuldashbekova.github.io/Modul_11.github.io/")

app_ikb = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text="Mini App", web_app=web_app)]
], resize_keyboard=True)
