# Qosmit2D

**Qosmit2D** is a simple 2D game engine written in C++ and <a target="_blank" href="https://www.sfml-dev.org/">SFML</a>. It uses Entity-Component-System for managing game objects. Currently Qosmit2D has implemented bellow systems:

- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">ECS</span>** : to handle game objects (entities) within the game and their behavior (components) through centralized logic blocks (systems)
- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Resource Manager</span>** : for loading and managing assets (images, sprites, audio files, etc) and scenes
- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Scene Manager</span>** : to hold and manage assets and logic for different scenes
- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Audio Player</span>** : to play music and sound effects
- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Collision Physics</span>** : to handle collision for simple 2D objects
- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Animation</span>** : to drive simple transform and sprite animations
- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Visual Debugger</span>** : to provide insights from various game engine system while the game is running
- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Frame Profiler</span>** : used Tracy to profile runtime and memory usage of various parts of the engine 

> [!info]
> I created this game engine as a learning experiment to explore various concepts discussed in the <a target="_blank" href="https://www.gameenginebook.com/">Game Engine Architecture</a> book and understand how different engine systems interact. It is not intended for production use at any scale.