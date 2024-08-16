const Media = ({ sources, alt }) => (
    <picture className="tcl-react-image tcl-react-media tds-clip-bottom-right dx-parallax-asset-changing__media-asset">
      {sources.map((src, index) => (
        <source
          key={index}
          srcSet={src.srcSet}
          media={src.media}
        />
      ))}
      <img src={sources[sources.length - 1].srcSet} className="tcl-react-media__asset" alt={alt} />
    </picture>
  );
  
  // Description component for rendering text sections
  const Description = ({ heading, details, style }) => (
    <div className="dx-parallax-asset-changing__description-content" style={style}>
      <div className="dx-parallax-asset-changing__description-heading">
        <div className="primary-copy">{heading.primary}</div>
        <div className="secondary-copy">{heading.secondary}</div>
      </div>
      <div className="dx-parallax-asset-changing__details tds-text--body">{details}</div>
    </div>
  );
  
  // Main component
  const SixthSection = () => (
    <section data-gtm-key="pack-load-lock" id="pack_load_lock">
      <section className="tds-layout tcl-layout tcl-layout--spacious tds-layout--constrained tcl-layout--reverse-on-mobile dx-parallax-asset-changing__layout">
        <section className="tds-layout-main tcl-layout__main">
          <div className="dx-parallax-asset-changing-section" id="react-data-pack_load_lock" data-component-status="initialized">
            <div className="dx-parallax-asset-changing__sticky-container">
              <div className="dx-parallax-asset-changing__sticky-content">
                <div className="dx-parallax-asset-changing__sticky-wrapper">
                  <div className="dx-parallax-asset-changing__wrapper tds-outline-bottom-left tds-outline-top-left tds-outline-bottom-right tds-clip-bottom-right">
                    <div className="dx-parallax-asset-changing__media">
                      <Media
                        sources={[
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Pack-Mobile.png", media: "(max-width: 599px) and (orientation: portrait)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Pack-Mobile.png", media: "(max-height: 599px) and (orientation: landscape)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Pack-Tablet.png", media: "(min-width: 600px) and (orientation: portrait)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Pack-Desktop.png", media: "(min-width: 900px) and (orientation: landscape)" }
                        ]}
                        alt="Pack it up"
                      />
                      <Media
                        sources={[
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Load-Mobile.png", media: "(max-width: 599px) and (orientation: portrait)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Load-Mobile.png", media: "(max-height: 599px) and (orientation: landscape)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Load-Tablet.png", media: "(min-width: 600px) and (orientation: portrait)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Load-Desktop.png", media: "(min-width: 900px) and (orientation: landscape)" }
                        ]}
                        alt="Load it up"
                      />
                      <Media
                        sources={[
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Lock-Mobile.png", media: "(max-width: 599px) and (orientation: portrait)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Lock-Mobile.png", media: "(max-height: 599px) and (orientation: landscape)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Lock-Tablet.png", media: "(min-width: 600px) and (orientation: portrait)" },
                          { srcSet: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-PLL-Lock-Desktop.png", media: "(min-width: 900px) and (orientation: landscape)" }
                        ]}
                        alt="Lock it up"
                      />
                    </div>
                    <div className="dx-parallax-asset-changing__description tds-theme--replicant-dotted-bg tds-theme--replicant-dotted-bg--reversed">
                      <div className="dx-parallax-asset-changing__description-container" style={{ transform: 'translateY(0px)' }}>
                        <Description
                          heading={{ primary: 'Pack', secondary: 'It Up' }}
                          details="Access a 6’x4’ bed, plus even more room in the front trunk, on the roof and in a hidden Gear Locker."
                        />
                        <Description
                          heading={{ primary: 'Load', secondary: 'It Up' }}
                          details="With a maximum payload of 1,134 kg and 1,897 liters of lockable storage, Cybertruck has all the capacity you need."
                          style={{ transform: 'translateY(calc(784px))' }}
                        />
                        <Description
                          heading={{ primary: 'Lock', secondary: 'It Up' }}
                          details="After you load it up, lock it up for peace of mind—under the Vault bed cover. Fold up the seats in the second row for an extra 1,530 liters of storage."
                          style={{ transform: 'translateY(calc(1594px))' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
  export default SixthSection;
