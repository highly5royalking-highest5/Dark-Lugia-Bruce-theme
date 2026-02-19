subghz.set_frequency(315000000);
display.clear();
display.draw_image("/DarkLugia/assets/splash.png", 0, 0); // Shows your Lugia-Bruce art
display.print("SEARCHING KIA 315MHz...");

while(true) {
    if (subghz.receive()) {
        storage.save("/DarkLugia/logs/Kia_" + system.get_time() + ".sub", subghz.get_data());
        audio.play("/DarkLugia/assets/roar.wav"); // Plays the Mew cry
        display.print("CAPTURED!");
        break;
    }
}
