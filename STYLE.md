# Schreibstil für mhus.de

Gilt für Blogbeiträge und Seitentexte auf mhus.de – egal ob Mike selbst schreibt oder ein Agent einen Entwurf macht.
Abgeleitet aus den 49 Beiträgen von blog.mhus.de (2018–2024). Entwurf, wird korrigiert, wo er nicht passt.

## Die Stimme in einem Satz

Ein erfahrener Entwickler erzählt einem Kollegen, worüber er gestolpert ist und wie er es gelöst hat – direkt, ehrlich,
mit trockenem Humor und Code.

## Was den Stil ausmacht (beibehalten)

- **Ich-Perspektive, Werkstattbericht.** „Ich habe…“, „Bei KT2L habe ich…“. Kein „wir als Team“, kein „man“-Nebel,
  kein unpersönliches Tutorial-Deutsch.
- **Sofort zur Sache.** Der erste Satz nennt das Problem oder die Situation. Keine Einleitung über die Bedeutung des
  Themas, keine Zusammenfassung am Ende, die den Text wiederholt.
  - gut: „Für einen Abend Kopfschmerzen hat mich eine merkwürdige Exception gekostet, die nur in den Selenium-Tests auftritt.“
  - gut: „The challenge is quite simple: To deploy a piece of software to Kubernetes it's necessary to create the container image in a pipeline.“
- **Ablauf: Problem → Versuche → Ursache → Lösung → was noch offen ist.** Sackgassen gehören dazu und werden erzählt
  („Even with different branches and tags I get dependency exceptions…“).
- **Ehrlich über den Stand.** Offenes wird benannt: „muss noch angepasst werden“, „als WIP markiert“, „The 'deep' reason is not really clear“.
  Nichts wird schöner dargestellt, als es ist.
- **Meinung ist erlaubt.** Kurz und klar: „That's ugly.“, „What a stupid behaviour!“, „Blöd, wenn…“. Ein Urteil,
  dann weiter im Text – keine Tiraden.
- **Trockener Humor, sparsam.** Kurze Einwürfe wie „Huch, Log weg.“, „Schwups, Anwendung beendet.“, „Naughty: …and the VM host is yours.“
  Höchstens zwei, drei pro Beitrag. Ein `;)` oder `:-/` ist ok, Emojis nicht.
- **Kurze Absätze, kurze Sätze.** Lieber viele kurze Beiträge als wenige lange („I plan to write more short posts than a few extended ones.“).
- **Code statt Beschreibung.** Befehle, Konfiguration und Ausgaben zeigen, nicht umschreiben. Nummerierte Schritte
  `1) 2) 3)` für Anleitungen.
- **Abschluss knapp.** „Fertig!“, „Problem gelöst!“, „Have fun …“ – oder einfach aufhören, wenn alles gesagt ist.

## Beitragsarten

| Art | Länge | Form |
|---|---|---|
| **Devlog** (z. B. `[KT2L]`) | 50–200 Wörter | Was ist neu, warum, was ist noch offen. Kein Code nötig. |
| **Merkzettel / How-to** | 50–300 Wörter | Kurzer Kontext, dann Befehle. „Merken: …“ |
| **Fehlerbericht** | 150–500 Wörter | Symptom → Suche → Ursache → Lösung/Workaround. |
| **Konzept / Essay** | 400–1000 Wörter | Warum → Anforderungen → Lösungsansätze. Mit Zwischenüberschriften. |

## Sprache

- **Standard ist Deutsch** – für die Website und für neue Beiträge. Wer es anders braucht, nutzt die Übersetzung im Browser.
- Ein Beitrag darf auf Englisch sein, wenn er sich klar an ein internationales Publikum richtet (z. B. ein Fix für ein
  bekanntes Open-Source-Problem). Dann `lang: en` im Front Matter setzen. Ein Beitrag bleibt bei einer Sprache.
- Keine Doppelpflege: kein Beitrag in zwei Sprachen.
- Deutsch: Anrede **du** (bzw. **ihr** an die Leser), umgangssprachlich erlaubt („Blöd, wenn…“).
  Fachbegriffe bleiben englisch (Session, Pod, Deployment) – nicht eindeutschen.
- Englisch: einfach und direkt, keine aufgeblasenen Formulierungen.

## Was korrigiert wird

Die alten Beiträge haben Tipp- und Grammatikfehler („Standart“, „lacks of“, „The want to maintainer to fixe it“).
Neue Texte werden **korrigiert, aber nicht geglättet**: Rechtschreibung und Grammatik ja, Satzbau und Ton bleiben.
Ein umgangssprachlicher Satz wird nicht in Schriftsprache umgeschrieben.

## Was nicht vorkommt

- Marketing-Sprech und Superlative: „revolutionär“, „nahtlos“, „leistungsstark“, „game changer“, „seamless“, „powerful“.
- Typische KI-Füllsel: „In der heutigen schnelllebigen Welt…“, „Lass uns eintauchen“, „delve“, „It's worth noting that…“,
  „Zusammenfassend lässt sich sagen…“, Dreierlisten aus Prinzip, rhetorische Fragen als Zwischenüberschrift.
- Übertriebene Struktur: keine Überschrift für zwei Absätze, keine Bullet-Listen, wo ein Satz reicht.
- Fettdruck als Dauerbetonung. Gedankenstriche sparsam.
- Emojis (außer `;)` / `:-/`).
- Behauptungen ohne Beleg: lieber „bei mir lief es danach“ als „das löst das Problem zuverlässig“.

## Seitentexte (Startseite, Projekte)

Gleiche Haltung, etwas knapper: sachlich, konkret, ohne Werbeton. Projekte beschreiben, was sie tun und warum es
sie gibt – nicht, wie großartig sie sind.
