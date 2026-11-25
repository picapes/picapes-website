# PiCapes Events Setup
This guide is to setup a minecraft server to only allow PiCapes registered players to join the server, for PiCapes related events

## Download plugins

- "Skript" (https://github.com/SkriptLang/Skript/releases)
- "skJson" (https://github.com/cooffeeRequired/skJson/releases)
- Server software: "Paper" (https://papermc.io/downloads/paper) / "Purpur" (https://purpurmc.org/downloads)

Requirements: Java 21+, Skript 2.15+, skJson 6.0+.

## Instructions

#### 1. Install plugins

Place both plugin ".jar" files in your server's "plugins/" folder. Start and restart the server to generate their configuration files.

#### 2. Enable HTTP requests

Open `plugins/SkJson/config.yml` and set:
```
enabled-http: true
```
Restart the server.

#### 3. Create the PiCapes script

Create `plugins/Skript/scripts/picapes.sk` and paste:

```
on connect:
    set {_req} to prepare GET request on "https://capeserver.picapes.syanic.org/profile/%player%"
    execute {_req}

    set {_res} to last response of {_req}

    if {_res} is not set:
        kick player due to "Player is not registered with PiCapes"
        stop

    if status code of {_res} is not 200:
        kick player due to "Player is not registered with PiCapes"
```

#### 4. Load the script

Run in the server console:
```
sk reload picapes
```
Check the console for errors.

5. Test

- Registered player: should be allowed to join.
- Unregistered player: should be kicked with "Player is not registered with PiCapes".