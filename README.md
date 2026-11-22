# mhus.de

[mhus.de](https://mhus.de) — personal website of Mike Hummel.

A small Jekyll site in `docs/`. GitHub Pages builds and serves it from `main:/docs`; there is no build workflow.

## Local preview

```bash
cd docs
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000/.

## License

This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details.

## Sources

- Logo https://www.svgrepo.com/svg/403775/letter-m - MIT License
- Fonts Inter, Inter Tight, JetBrains Mono - SIL Open Font License (see `docs/assets/fonts/`)
