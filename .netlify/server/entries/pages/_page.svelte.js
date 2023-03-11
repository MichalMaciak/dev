import { c as create_ssr_component, d as compute_rest_props, f as each, h as spread, i as escape_attribute_value, j as escape_object, k as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const SvelteImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "sizes", "width", "height", "loading", "decoding", "ref"]);
  let { src = [] } = $$props;
  let { sizes = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { loading = "lazy" } = $$props;
  let { decoding = "async" } = $$props;
  let { ref = void 0 } = $$props;
  const priority = ["heic", "heif", "avif", "webp", "jpeg", "jpg", "png", "gif", "tiff"];
  let image = {};
  let sources = [];
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.sizes === void 0 && $$bindings.sizes && sizes !== void 0)
    $$bindings.sizes(sizes);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.decoding === void 0 && $$bindings.decoding && decoding !== void 0)
    $$bindings.decoding(decoding);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (src.length) {
      const { list, lqip } = src.reduce(
        (a, c) => {
          if (c.base64)
            a.lqip = `url('${c.base64}') no-repeat center/cover`;
          else
            a.list.push(c);
          return a;
        },
        { list: [], lqip: void 0 }
      );
      const groups = [];
      for (const format of priority) {
        const group = list.filter((i) => i.format === format);
        if (group.length) {
          group.sort((a, b) => a.width - b.width);
          const { src: src2, width: width2, height: height2 } = group[group.length - 1];
          groups.push({
            format: format === "jpg" ? "jpeg" : format,
            srcset: group.reduce((a, c) => [...a, `${c.src} ${c.width}w`], []).join(","),
            src: src2,
            width: width2,
            height: height2
          });
        }
      }
      image = { ...groups.pop(), lqip };
      sources = groups;
    }
  }
  return `${image.src ? `<picture>${each(sources, ({ format, srcset }) => {
    return `<source type="${"image/" + escape(format, true)}"${add_attribute("srcset", srcset, 0)}${add_attribute("sizes", sizes, 0)}>`;
  })}
    
    <img${spread(
    [
      { src: escape_attribute_value(image.src) },
      {
        srcset: escape_attribute_value(image.srcset)
      },
      { sizes: escape_attribute_value(sizes) },
      {
        width: escape_attribute_value(width || image.width || void 0)
      },
      {
        height: escape_attribute_value(height || image.height || void 0)
      },
      { loading: escape_attribute_value(loading) },
      {
        decoding: escape_attribute_value(decoding)
      },
      escape_object($$restProps)
    ],
    { styles: { "background": image.lqip } }
  )}${add_attribute("this", ref, 0)}></picture>` : ``}`;
});
const FxReveal_svelte_svelte_type_style_lang = "";
const FxParallax_svelte_svelte_type_style_lang = "";
const michal = [
  {
    format: "avif",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/michal.285bbc99.avif"
  },
  {
    format: "webp",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/michal.83c73a34.webp"
  },
  {
    format: "jpg",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/michal.c6fed344.jpg"
  },
  {
    format: "avif",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/michal.172661fe.avif"
  },
  {
    format: "webp",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/michal.aa05ed48.webp"
  },
  {
    format: "jpg",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/michal.37124601.jpg"
  },
  {
    format: "avif",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/michal.f3b7429a.avif"
  },
  {
    format: "webp",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/michal.7ecd21df.webp"
  },
  {
    format: "jpg",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/michal.e39fd7bc.jpg"
  },
  {
    format: "webp",
    width: 16,
    height: 16,
    base64: "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAQCdASoQABAABUB8JZACdADB2vq8gAD+50BpMvp+qrb9V9DLNoMJZ6to5BYL6DsfBdCfDWuhcU4isY41nnn3np22l3qqm/HD0H520mKv9kAA",
    src: "/_app/immutable/assets/michal.dc7dc1ad.webp"
  }
];
const github = [
  {
    format: "avif",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/git.6d8921a2.avif"
  },
  {
    format: "webp",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/git.4a568b04.webp"
  },
  {
    format: "jpg",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/git.0360088a.jpg"
  },
  {
    format: "avif",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/git.dd1f4a5e.avif"
  },
  {
    format: "webp",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/git.71a0f77a.webp"
  },
  {
    format: "jpg",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/git.2a6bb0a0.jpg"
  },
  {
    format: "avif",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/git.80e4f806.avif"
  },
  {
    format: "webp",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/git.cd12f818.webp"
  },
  {
    format: "jpg",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/git.d886c4ff.jpg"
  },
  {
    format: "webp",
    width: 16,
    height: 16,
    base64: "data:image/webp;base64,UklGRkwBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSMYAAAABkLNt2/m34q/f+49t29ycTB5zZLKtT+BMtpPR9uTU7Wa7k223TxkRCej4T/FXYV27cfr4RCooQJHxUP7ZdkGho1L+v++KIkK+1+28OHvtReu8HABb8tENR2XkSKNIOm5v5bYd/+SIzJIg0oaeBgqje3KWNJEW9AAN41tyQ0WJHPBXEfpDTmHxQKQRNA2PMyI90Csr8rMAw9lv8kPCwfzp1eIZf1iQd9KGUgS/utjtA6MikwA67LckHgbflIIGKHDSB1tz0ABWUDggYAAAAHACAJ0BKhAAEAAFQHwlsAJ0Bi1WAtck/xHU1AAA/p9CPWSPmUk+Xs3/jxaauSrsn3JHGS9Stst7qmCnBCdZKZbQU59TwaDniyxlCWvJeShNDo3AJ6bfmksmvlWQ6MuAAA==",
    src: "/_app/immutable/assets/git.a91991b2.webp"
  }
];
const ln = [
  {
    format: "avif",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/in.2d88e2ab.avif"
  },
  {
    format: "webp",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/in.8becc068.webp"
  },
  {
    format: "jpg",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/in.31aba637.jpg"
  },
  {
    format: "avif",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/in.2123219e.avif"
  },
  {
    format: "webp",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/in.b7df1d22.webp"
  },
  {
    format: "jpg",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/in.01b6de3d.jpg"
  },
  {
    format: "avif",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/in.8fd58201.avif"
  },
  {
    format: "webp",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/in.5dfc5a1c.webp"
  },
  {
    format: "jpg",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/in.46d75b93.jpg"
  },
  {
    format: "webp",
    width: 16,
    height: 16,
    base64: "data:image/webp;base64,UklGRjwBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSK8AAAABgGJt2zLl+WRkB7ODSTM4NLpDcnd3mru7u1YyybU6NHfP/IkHhyVExATgH7OL9e8yyVKo3xSQtbBqBanVFyRn46sEAAH4JKX42ksKg+GeE26GQDc5k0TutpHctgH1ZF8UXw2SBieARnIghgZvIubIw28GY/j24kAoeSR+4AIQ8btVgfBvGsj+aHIZCCMPBFrJsThyC4gijwWKru6qgu/PZgG/89N5AFIKSCkASCkAAFZQOCBmAAAAkAIAnQEqEAAQAAVAfCWwAnRH/+6AAoCZwO0wXAAA/qin3CodDtKtfAuWBE03ZLz25kbzs4HjTvT985SlRYhoCZ/1lL5vR0KYwdcIY2MhYwW33CBao+Xo1CXfvJdqyyGwfOFbUAAA",
    src: "/_app/immutable/assets/in.af454d92.webp"
  }
];
const mail = [
  {
    format: "avif",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/gmail.8c1243cd.avif"
  },
  {
    format: "webp",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/gmail.8b57f25b.webp"
  },
  {
    format: "jpg",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/gmail.576dae51.jpg"
  },
  {
    format: "avif",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/gmail.edeed61b.avif"
  },
  {
    format: "webp",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/gmail.612e9879.webp"
  },
  {
    format: "jpg",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/gmail.2cf5422d.jpg"
  },
  {
    format: "avif",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/gmail.5d63ec54.avif"
  },
  {
    format: "webp",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/gmail.28bd23b8.webp"
  },
  {
    format: "jpg",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/gmail.de811a04.jpg"
  },
  {
    format: "webp",
    width: 16,
    height: 16,
    base64: "data:image/webp;base64,UklGRvAAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSGIAAAABcFtr25N8/OSOdTIdK1AnQ5ddxtZRsg5Ehrf6v/8cJ4iICSBhsAVppBxuilJabFLyoZit0Y3MBpcC08IcsSsxLZAuI/Y8/EXBWkbsa/QTs8Mxh+LWvf7uT+nje/NIXfCEBlZQOCBoAAAAUAIAnQEqEAAQAAVAfCWwAnQGL9Yw1cwMGcLQAP6f3E0W/CO1WNOTjRz2bkqulRuRmtgxKoP/akBPn8w03QOE/CUDxJnZ41Pd/trw7RSxXa1reRMEbMb3ZMMqCXF4n4E9GZFNobqEgAA=",
    src: "/_app/immutable/assets/gmail.4fbcdbae.webp"
  }
];
const phone = [
  {
    format: "avif",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/phone.13df7240.avif"
  },
  {
    format: "webp",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/phone.3676a843.webp"
  },
  {
    format: "jpg",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/phone.966764b8.jpg"
  },
  {
    format: "avif",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/phone.2fb7abec.avif"
  },
  {
    format: "webp",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/phone.a7e30868.webp"
  },
  {
    format: "jpg",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/phone.095dffc7.jpg"
  },
  {
    format: "avif",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/phone.82092f44.avif"
  },
  {
    format: "webp",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/phone.6300dfd4.webp"
  },
  {
    format: "jpg",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/phone.72825d1a.jpg"
  },
  {
    format: "webp",
    width: 16,
    height: 16,
    base64: "data:image/webp;base64,UklGRkIBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSNMAAAABkGNr27FX1/e9f2zbrOxUGYAzAnapUtq2jSqVnbQ2j40yvfkcziEiJkADSzTMwz1BB/CYvyyA6NPXG+n8vSMiWZA/MfK1Hwh4fH6QS2cK1o9qj9tQVj/l+U5K8V7vPmv8ngitci93yTgUfujZmZkEnyuRDBTUzm4PHaKoEsnEoOHoVZT90QwM53KhMCjAPE1HJ+xGpgDXFAv+VqSKHCUHf5B3iWiAIvNRnq/lQSSfvxXxX0XuXx7kyfMvDFiPiLzcy6n6BwqSVkQ+hPJfTYeYDHN0AFZQOCBIAAAAMAIAnQEqEAAQAAVAfCWQAnQBA6UTgqcojAAA/uX3Y4SjD5KGjrNfiffjzY2c4FTqZ3Gy+VSlpY0zDtpJb9PcUZDT3CVzMAAA",
    src: "/_app/immutable/assets/phone.0bf1651d.webp"
  }
];
const discord = [
  {
    format: "avif",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/discord.d26958bb.avif"
  },
  {
    format: "webp",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/discord.5c42057e.webp"
  },
  {
    format: "jpg",
    width: 480,
    height: 480,
    src: "/_app/immutable/assets/discord.daf23aa9.jpg"
  },
  {
    format: "avif",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/discord.7f60fc1a.avif"
  },
  {
    format: "webp",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/discord.313e40aa.webp"
  },
  {
    format: "jpg",
    width: 1024,
    height: 1024,
    src: "/_app/immutable/assets/discord.a91462bc.jpg"
  },
  {
    format: "avif",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/discord.2500e983.avif"
  },
  {
    format: "webp",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/discord.e8f9c228.webp"
  },
  {
    format: "jpg",
    width: 1920,
    height: 1920,
    src: "/_app/immutable/assets/discord.99edd329.jpg"
  },
  {
    format: "webp",
    width: 16,
    height: 16,
    base64: "data:image/webp;base64,UklGRjQBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSLQAAAABkFvbtqpl672LO2RU4K59EGoB7k5G6A6RpWTu7sSWulTgTzbwawkRMQH8X/sX+08GMAYwv8NKD4eA7FB+X3b+sTK3sOhftxgwFEmeJHlSFwaO9eF8Os6n86nnKEjzfEnyJTkqhHK5buewNNPw7mkUZqQrAl4Vz5l0DDtyvfYBabLmXboP4Vzvjn7rfugljiJXOuha3x5eldSGRUL3SjJAzOxEAWADBFiWAbABy9gWgGUbGwBWUDggWgAAAFACAJ0BKhAAEAAFQHwlsALsBixm3bfZocl3+AD+noSv4iIreoG0blg3ovq204S8M7CPBul3SlRzcIz5pTh4c3quQ+411dwGZRe8l0uwpqvzevlDXYFcopRAAA==",
    src: "/_app/immutable/assets/discord.bb3e07b7.webp"
  }
];
const Open_graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openGraph = void 0 } = $$props;
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  return `${openGraph ? `${each(Object.entries(openGraph), ([key, value]) => {
    let _type = typeof value;
    return `
    
    ${_type !== "object" ? (() => {
      let transform = key.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
      return `
      <meta property="${"og:" + escape(transform, true)}"${add_attribute("content", value, 0)}>`;
    })() : ``}
    ${_type === "object" ? `${key === "images" ? `${each(openGraph.images ?? [], (image) => {
      return `${each(Object.entries(image), ([key2, value2]) => {
        return `<meta property="${"og:image:" + escape(key2, true)}"${add_attribute("content", value2.toString(), 0)}>`;
      })}`;
    })}` : `${key === "videos" ? `${each(openGraph.videos ?? [], (video) => {
      return `${each(Object.entries(video), ([key2, value2]) => {
        return `${key2 === "url" ? `<meta property="og:video"${add_attribute("content", value2.toString(), 0)}>` : `<meta property="${"og:video:" + escape(key2, true)}"${add_attribute("content", value2.toString(), 0)}>`}`;
      })}`;
    })}` : `${key === "localeAlternate" ? `${each(openGraph.localeAlternate ?? [], (alternate) => {
      return `<meta property="og:locale:alternate"${add_attribute("content", alternate, 0)}>`;
    })}` : `${key === "music" ? `${each(Object.entries(openGraph.music ?? {}), ([key2, value2]) => {
      let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
      return `
          <meta property="${"music:" + escape(transform, true)}"${add_attribute("content", value2.toString(), 0)}>`;
    })}` : `${key === "movie" ? `${each(Object.entries(openGraph.movie ?? {}), ([key2, value2]) => {
      return `${typeof value2 === "object" ? `${each(value2, (propValue) => {
        return `<meta property="${"video:" + escape(key2, true)}"${add_attribute("content", propValue, 0)}>`;
      })}` : (() => {
        let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
        return `
            <meta property="${"video:" + escape(transform, true)}"${add_attribute("content", value2.toString(), 0)}>`;
      })()}`;
    })}` : `${key === "article" ? `${each(Object.entries(openGraph.article ?? {}), ([key2, value2]) => {
      return `${typeof value2 === "object" ? `${each(value2, (propValue) => {
        return `<meta property="${"article:" + escape(key2, true)}"${add_attribute("content", propValue, 0)}>`;
      })}` : (() => {
        let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
        return `
            <meta property="${"article:" + escape(transform, true)}"${add_attribute("content", value2.toString(), 0)}>`;
      })()}`;
    })}` : `${key === "book" ? `${each(Object.entries(openGraph.book ?? {}), ([key2, value2]) => {
      return `${typeof value2 === "object" ? `${each(value2, (propValue) => {
        return `<meta property="${"book:" + escape(key2, true)}"${add_attribute("content", propValue, 0)}>`;
      })}` : (() => {
        let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
        return `
            <meta property="${"book:" + escape(transform, true)}"${add_attribute("content", value2.toString(), 0)}>`;
      })()}`;
    })}` : `${key === "profile" ? `${each(Object.entries(openGraph.profile ?? {}), ([key2, value2]) => {
      let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
      return `
          <meta property="${"profile:" + escape(transform, true)}"${add_attribute("content", value2, 0)}>`;
    })}` : ``}`}`}`}`}`}`}`}` : ``}`;
  })}` : ``}`;
});
const Svelte_seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { base = void 0 } = $$props;
  let { applicationName = void 0 } = $$props;
  let { themeColor = void 0 } = $$props;
  let { nofollow = false } = $$props;
  let { noindex = false } = $$props;
  let { nositelinkssearchbox = false } = $$props;
  let { notranslate = false } = $$props;
  let { canonical = void 0 } = $$props;
  let { amp = void 0 } = $$props;
  let { manifest = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { jsonLd = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.base === void 0 && $$bindings.base && base !== void 0)
    $$bindings.base(base);
  if ($$props.applicationName === void 0 && $$bindings.applicationName && applicationName !== void 0)
    $$bindings.applicationName(applicationName);
  if ($$props.themeColor === void 0 && $$bindings.themeColor && themeColor !== void 0)
    $$bindings.themeColor(themeColor);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nositelinkssearchbox === void 0 && $$bindings.nositelinkssearchbox && nositelinkssearchbox !== void 0)
    $$bindings.nositelinkssearchbox(nositelinkssearchbox);
  if ($$props.notranslate === void 0 && $$bindings.notranslate && notranslate !== void 0)
    $$bindings.notranslate(notranslate);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.amp === void 0 && $$bindings.amp && amp !== void 0)
    $$bindings.amp(amp);
  if ($$props.manifest === void 0 && $$bindings.manifest && manifest !== void 0)
    $$bindings.manifest(manifest);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0)
    $$bindings.jsonLd(jsonLd);
  return `${$$result.head += `<!-- HEAD_svelte-au3o8n_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="canonical"${add_attribute("href", canonical, 0)}>` : ``}${keywords ? `<meta name="keywords"${add_attribute("content", keywords, 0)}>` : ``}${amp ? `<link rel="amphtml"${add_attribute("href", amp, 0)}>` : ``}${manifest ? `<link rel="manifest"${add_attribute("href", manifest, 0)}>` : ``}${applicationName ? `<meta name="application-name"${add_attribute("content", applicationName, 0)}>` : ``}${languageAlternates ? `${each(languageAlternates, ({ href, hreflang }) => {
    return `<link rel="alternate"${add_attribute("href", href, 0)}${add_attribute("hreflang", hreflang, 0)}>`;
  })}` : ``}${themeColor ? `<meta name="theme-color"${add_attribute("content", themeColor, 0)}>` : ``}${base ? `<base${add_attribute("href", base, 0)}>` : ``}${facebook?.appId ? `<meta property="fb:app_id"${add_attribute("content", facebook.appId, 0)}>` : ``}<meta name="robots"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}><meta name="googlebot"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}>${nositelinkssearchbox ? `<meta name="google" content="nositelinkssearchbox">` : ``}${notranslate ? `<meta name="google" content="notranslate">` : ``}${twitter ? `${each(Object.entries(twitter), ([key, value]) => {
    let transformed = key.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
    return `
      
      <meta name="${"twitter:" + escape(transformed, true)}"${add_attribute("content", value, 0)}>`;
  })}` : ``}${openGraph ? `${validate_component(Open_graph, "OpenGraphComponent").$$render($$result, { openGraph }, {}, {})}` : ``}${jsonLd ? (() => {
    let data = Object.assign({}, jsonLd);
    return `
    <!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", data }) + "<"}/script>`}<!-- HTML_TAG_END -->`;
  })() : ``}${slots.default ? slots.default({}) : ``}<!-- HEAD_svelte-au3o8n_END -->`, ""}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="bg-slate-900"><section class="flex flex-col md:flex-row px-8 md:px-24 py-8 items-center md:items-start"><div>${validate_component(SvelteImg, "Img").$$render(
    $$result,
    {
      class: "w-40 rounded-full max-w-xs ",
      src: michal,
      alt: "Michał Maciak"
    },
    {},
    {}
  )} 
            <p class="text-xl text-teal-100 pt-4 text-center md:text-left">Michał Maciak <br>- maciak.dev <br> Warsaw, Poland</p></div>
        <div class="flex flex-row justify-center items-start md:justify-end w-full md:w-5/6 pt-8 md:pt-0"><div class="px-2 md:px-4 hover:animate-bounce"><a href="https://github.com/maciakDev">${validate_component(SvelteImg, "Img").$$render(
    $$result,
    {
      class: "w-20 md:w-12",
      src: github,
      alt: "GitHub"
    },
    {},
    {}
  )}</a></div>
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="https://www.linkedin.com/in/michalmaciak/">${validate_component(SvelteImg, "Img").$$render(
    $$result,
    {
      class: "w-20 md:w-12",
      src: ln,
      alt: "linkedin"
    },
    {},
    {}
  )}</a></div>
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="https://discord.gg/Fscq3Khxtt">${validate_component(SvelteImg, "Img").$$render(
    $$result,
    {
      class: "w-20 md:w-12",
      src: discord,
      alt: "discord"
    },
    {},
    {}
  )}</a></div>
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="mailto:michal@maicak.dev">${validate_component(SvelteImg, "Img").$$render(
    $$result,
    {
      class: "w-20  md:w-12",
      src: mail,
      alt: "e-mail"
    },
    {},
    {}
  )}</a></div>
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="tel:+48694296006">${validate_component(SvelteImg, "Img").$$render(
    $$result,
    {
      class: "w-20 md:w-12",
      src: phone,
      alt: "phone"
    },
    {},
    {}
  )}</a></div></div></section></header>

<main class="bg-slate-900"><section class="flex flex-col justify-center items-center pb-10"><h2 class="text-teal-100 text-4xl md:text-5xl my-12 px-8 font-sans">&quot;The cobbler&#39;s children have no shoes&quot;</h2>  
      <h1 class="text-6xl mx-32 md:text-9xl md:mx-72 text-teal-400 text-right font-bold font-serif tracking-wider mb-10">I solve <span class="underline">Your</span> problems
        </h1>
        
        <h2 class="text-teal-100 text-2xl md:text-3xl my-12 px-8 font-sans">Transforming your IT struggles into digital success:</h2>  
        
        <div class="flex flex-col md:flex-row md:py-12 "><div class="px-14 py-8 md:py-0"><h3 class="text-teal-100 text-3xl font-sans border-l-2 border-teal-100 pl-4">websites, speed and functionality issues</h3></div>
            <div class="px-14 py-8 md:py-0"><h3 class="text-teal-100 text-3xl font-sans border-l-2 border-teal-100 pl-4">applications, configurators, scripts</h3></div>
            <div class="px-14 py-8 md:py-0"><h3 class="text-teal-100 text-3xl font-sans border-l-2 border-teal-100 pl-4">management, conversion, accessibility</h3></div></div></section></main>
<footer class="bg-slate-900 border-t-2 border-teal-100"><p class="text-teal-100 font-sans p-8 py-8 text-right">© 2023 maciak.dev</p></footer>


${validate_component(Svelte_seo, "SvelteSeo").$$render(
    $$result,
    {
      title: "Maciak.dev | I am solving your IT problems",
      description: "Are you struggling with website speed and functionality issues, or looking to develop custom applications, configurators, or scripts? As an experienced IT developer, I specialize in solving these types of challenges and providing comprehensive management solutions. ",
      canonical: "https://maciak.dev",
      keywords: "maciak, Problem-solving skills, IT developer, Website development, Website speed, Website functionality, Custom applications, Scripts, Management solutions",
      openGraph: {
        title: "Maciak.dev | I am solving your IT problems",
        description: "Are you struggling with website speed and functionality issues, or looking to develop custom applications, configurators, or scripts? As an experienced IT developer, I specialize in solving these types of challenges and providing comprehensive management solutions. ",
        image: "https://maciak.dev/wallpaper800x600.jpg",
        url: "https://maciak.dev",
        type: "website",
        images: [
          {
            url: "/wallpaper800x600.jpg",
            width: 800,
            height: 600,
            alt: "Squatting"
          }
        ],
        site_name: "Maciak.dev"
      },
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Maciak.dev | I am solving your IT problems",
        "description": "Are you struggling with website speed and functionality issues, or looking to develop custom applications, configurators, or scripts? As an experienced IT developer, I specialize in solving these types of challenges and providing comprehensive management solutions.",
        "url": "https://maciak.dev"
      }
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
