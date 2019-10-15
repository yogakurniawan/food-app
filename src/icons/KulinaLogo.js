import React from 'react'

const SvgComponent = props => (
  <svg width={98} height={28} {...props}>
    <g fill="#f9423a" fillRule="evenodd">
      <path d="M7.922 7.325a4.295 4.295 0 010-6.068 4.282 4.282 0 016.06 0 4.282 4.282 0 016.06 0 4.295 4.295 0 010 6.068l-6.06 6.068-6.06-6.068zm1.212-1.214l3.636-3.64a2.569 2.569 0 00-3.636 0 2.577 2.577 0 000 3.64zm6.06-3.64l3.637 3.64a2.577 2.577 0 000-3.64 2.569 2.569 0 00-3.637 0zm2.425 4.854l-3.637-3.641-3.636 3.641 3.636 3.64 3.637-3.64zm-10.303.607L13.376 14l-6.06 6.068a4.282 4.282 0 01-6.06 0 4.295 4.295 0 010-6.068 4.295 4.295 0 010-6.068 4.282 4.282 0 016.06 0zM6.104 9.145a2.569 2.569 0 00-3.637 0 2.577 2.577 0 000 3.641l3.637-3.64zm-3.637 6.069a2.577 2.577 0 000 3.64 2.569 2.569 0 003.637 0l-3.637-3.64zm4.849 2.427L10.952 14l-3.636-3.64L3.679 14l3.637 3.64zm12.727 3.034a4.295 4.295 0 010 6.068 4.282 4.282 0 01-6.06 0 4.282 4.282 0 01-6.061 0 4.295 4.295 0 010-6.068l6.06-6.068 6.06 6.068zm-1.212 1.214l-3.637 3.64a2.569 2.569 0 003.637 0 2.577 2.577 0 000-3.64zm-6.06 3.64l-3.637-3.64a2.577 2.577 0 000 3.64 2.569 2.569 0 003.636 0zm-2.425-4.854l3.636 3.641 3.637-3.641-3.637-3.64-3.636 3.64zm10.303-.607L14.589 14l6.06-6.068a4.282 4.282 0 016.06 0 4.295 4.295 0 010 6.068 4.295 4.295 0 010 6.068 4.282 4.282 0 01-6.06 0zm1.212-1.213a2.569 2.569 0 003.636 0 2.577 2.577 0 000-3.641l-3.636 3.64zm3.636-6.069a2.577 2.577 0 000-3.64 2.569 2.569 0 00-3.636 0l3.636 3.64zM20.65 10.36L17.013 14l3.636 3.64L24.285 14l-3.636-3.64zM37.726 16.602h-.048v5.986h-3.43V4.727h3.43v10.996h.048l3.693-5.344h3.98L41.3 15.89l4.265 6.699h-4.217l-3.622-5.986zm17.132 4.394h-.048c-.508.745-1.064 1.251-1.668 1.52a4.742 4.742 0 01-1.954.404c-.746 0-1.386-.11-1.918-.332a3.74 3.74 0 01-1.334-.915 3.62 3.62 0 01-.786-1.354 5.323 5.323 0 01-.25-1.65v-8.29h3.43v7.435c0 .443.06.815.18 1.116.118.3.281.542.488.724.206.182.437.313.69.392.255.08.517.119.787.119.715 0 1.267-.261 1.656-.784.39-.522.584-1.211.584-2.066v-6.936h3.43v12.209h-3.287v-1.592zm5.933-16.27h3.43v17.862h-3.43V4.727zm5.742 1.877c0-.253.052-.499.155-.736.103-.238.242-.452.417-.642s.385-.344.631-.463c.246-.119.513-.178.798-.178.255 0 .5.051.74.154a2.172 2.172 0 011.095 1.057 1.886 1.886 0 01.012 1.52 2.164 2.164 0 01-.429.642 2.05 2.05 0 01-.643.451c-.246.11-.505.166-.775.166-.285 0-.552-.06-.798-.178a2.173 2.173 0 01-.631-.451 2.123 2.123 0 01-.417-.63 1.775 1.775 0 01-.155-.712zm.286 3.776h3.431v12.209h-3.431V10.379zm13.891 4.774c0-.443-.06-.815-.179-1.116-.119-.3-.282-.542-.488-.724a1.882 1.882 0 00-.691-.392 2.628 2.628 0 00-.786-.119c-.715 0-1.267.261-1.656.784-.39.522-.584 1.211-.584 2.066v6.936h-3.431V10.379h3.288v1.592h.048c.508-.744 1.064-1.251 1.668-1.52a4.742 4.742 0 011.953-.404c.731 0 1.366.11 1.907.332.54.222.988.527 1.346.915.357.388.62.839.786 1.354.167.514.25 1.065.25 1.65v8.29h-3.43v-7.435zm14.153 5.843h-.047c-.572.745-1.235 1.251-1.99 1.52-.754.27-1.489.404-2.204.404-.476 0-.969-.063-1.477-.19a4.194 4.194 0 01-1.394-.63 3.35 3.35 0 01-1.025-1.151c-.262-.475-.393-1.061-.393-1.758 0-.332.048-.7.143-1.104.096-.404.318-.788.667-1.152.35-.364.874-.685 1.573-.962.699-.277 1.644-.455 2.835-.535l3.17-.19v-.57c0-.728-.211-1.27-.632-1.627-.42-.356-1.013-.534-1.775-.534-.715 0-1.27.162-1.668.487-.397.325-.612.764-.643 1.318h-3.288c.031-.475.146-.962.345-1.46.199-.5.52-.959.965-1.378.445-.42 1.025-.764 1.74-1.033.714-.27 1.612-.404 2.692-.404.762 0 1.477.075 2.144.226.667.15 1.255.383 1.764.7.508.317.909.725 1.203 1.223.294.5.44 1.097.44 1.794v7.078c0 .316.016.593.048.83.032.238.072.468.12.69h-3.313v-1.592zm-.143-3.729l-2.859.262c-.81.079-1.362.237-1.656.475-.294.237-.44.578-.44 1.02 0 .54.214.911.643 1.117.429.206.929.309 1.5.309.27 0 .569-.04.894-.119.326-.079.632-.202.918-.368.286-.166.524-.38.715-.641.19-.261.285-.574.285-.938v-1.117z" />
    </g>
  </svg>
)

export default SvgComponent
