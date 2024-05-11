from aiogram import Dispatcher, types, F
from aiogram.filters import CommandStart
from keyboards import app_ikb

dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: types.Message):
    await message.answer("Salom", reply_markup=app_ikb)


@dp.message(F.func(lambda message: message.web_app_data.data))
async def get_btn(message: types.Message):
    text = message.web_app_data.data
    await message.answer(text=f"Nomi: {text.split('/')[0]}\n"
                              f"Narxi: {text.split('/')[1]}")
