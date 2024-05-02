import asyncio
import os
from aiogram import Bot
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv('BOT_TOKEN')

bot = Bot(token=BOT_TOKEN)


async def main() -> None:
    from handlers import dp
    await dp.start_polling(bot)


if __name__ == "__main__":
    print("Starting.....")
    asyncio.run(main())
