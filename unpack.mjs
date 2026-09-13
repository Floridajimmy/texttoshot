import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";

const archive = "/tmp/texttoshot-source.tgz";
writeFileSync(archive, Buffer.from(readFileSync("payload-next2.txt", "utf8").trim(), "base64"));
execFileSync("tar", ["-xzf", archive, "-C", "."], { stdio: "inherit" });
unlinkSync(archive);
