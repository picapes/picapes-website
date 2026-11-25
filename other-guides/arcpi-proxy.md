# ArcPi Proxy Guide

ArcPi Proxy allows PiCapes capes to be displayed in clients that support OptiFine capes, including **OptiFine**, **1.8 PvP clients**, **[Fabric Capes mod](https://modrinth.com/mod/capes)**, and more. This makes it a useful option for older Minecraft versions and players who cannot use the PiCapes Fabric mod.


## How it Works?
When your game requests an OptiFine cape, ArcPi Proxy uses DNS or hosts-file redirection to send the request to PiCapes instead of the OptiFine cape servers.

![ArcPi Proxy](/assets/docs/installation/how_arcpi_proxy_works.png)

PiCapes then provides your cape in a format that OptiFine-compatible clients can use, allowing it to appear normally without installing any additional mods.

## Installation
To set up ArcPi Proxy, you can either modify your system's hosts file or use a DNS service that supports custom records. Below are the preferred methods for each platform:

::: tip INFO
ArcPi Proxy is under testing and will come soon.
:::

<!--### Hosts File Method (Windows/Linux/MacOS)
1. Open your system's hosts file with administrative privileges:
   - Windows: `C:\Windows\System32\drivers\etc\hosts`
   - Linux/MacOS: `/etc/hosts`
2. Add the following line to the file:
   ```
   138.252.100.17 s.optifine.net
   ```
3. Save the file and close it.

### DNS Method-->