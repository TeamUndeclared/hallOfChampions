import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={313}
      height={179}
      viewBox="-8 4 313 179"
      {...props}
    >
      <image
        overflow="visible"
        opacity={0.75}
        width={250}
        height={188}
        xlinkHref="data:image/png;base64,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"
        transform="translate(48) scale(.24)"
      />
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={57}
        y1={22.5}
        x2={99}
        y2={22.5}
      >
        <stop offset={0} stopColor="#231f20" />
        <stop offset={0.025} stopColor="#272324" />
        <stop offset={0.162} stopColor="#353335" />
        <stop offset={0.313} stopColor="#3e3d3f" />
        <stop offset={0.5} stopColor="#414042" />
        <stop offset={1} stopColor="#231f20" />
      </linearGradient>
      <path
        fill="url(#prefix__a)"
        d="M99 22.5C99 29.956 92.956 36 85.5 36h-15C63.044 36 57 29.956 57 22.5S63.044 9 70.5 9h15C92.956 9 99 15.044 99 22.5z"
      />
      <image
        overflow="visible"
        opacity={0.75}
        width={250}
        height={188}
        xlinkHref="data:image/png;base64,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"
        transform="translate(192) scale(.24)"
      />
      <linearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={201}
        y1={22.5}
        x2={243}
        y2={22.5}
      >
        <stop offset={0} stopColor="#231f20" />
        <stop offset={0.025} stopColor="#272324" />
        <stop offset={0.162} stopColor="#353335" />
        <stop offset={0.313} stopColor="#3e3d3f" />
        <stop offset={0.5} stopColor="#414042" />
        <stop offset={1} stopColor="#231f20" />
      </linearGradient>
      <path
        fill="url(#prefix__b)"
        d="M243 22.5c0 7.456-6.044 13.5-13.5 13.5h-15c-7.456 0-13.5-6.044-13.5-13.5S207.044 9 214.5 9h15c7.456 0 13.5 6.044 13.5 13.5z"
      />
      <linearGradient
        id="prefix__c"
        gradientUnits="userSpaceOnUse"
        x1={70}
        y1={53}
        x2={87}
        y2={53}
      >
        <stop offset={0} stopColor="#231f20" />
        <stop offset={0.019} stopColor="#282425" />
        <stop offset={0.122} stopColor="#3d3b3d" />
        <stop offset={0.231} stopColor="#4c4c4e" />
        <stop offset={0.351} stopColor="#555658" />
        <stop offset={0.5} stopColor="#58595b" />
        <stop offset={1} stopColor="#231f20" />
      </linearGradient>
      <path
        fill="url(#prefix__c)"
        d="M87 77c0 6.627-3.806 12-8.5 12S70 83.627 70 77V29c0-6.627 3.806-12 8.5-12S87 22.373 87 29v48z"
      />
      <linearGradient
        id="prefix__d"
        gradientUnits="userSpaceOnUse"
        x1={214}
        y1={53}
        x2={231}
        y2={53}
      >
        <stop offset={0} stopColor="#231f20" />
        <stop offset={0.019} stopColor="#282425" />
        <stop offset={0.122} stopColor="#3d3b3d" />
        <stop offset={0.231} stopColor="#4c4c4e" />
        <stop offset={0.351} stopColor="#555658" />
        <stop offset={0.5} stopColor="#58595b" />
        <stop offset={1} stopColor="#231f20" />
      </linearGradient>
      <path
        fill="url(#prefix__d)"
        d="M231 77c0 6.627-3.806 12-8.5 12s-8.5-5.373-8.5-12V29c0-6.627 3.806-12 8.5-12s8.5 5.373 8.5 12v48z"
      />
      <path
        fill="#E1222C"
        d="M296 158c0 8.836-7.164 16-16 16H20c-8.836 0-16-7.164-16-16V98c0-8.836 7.164-16 16-16h260c8.836 0 16 7.164 16 16v60z"
      />
      <path
        fill="#FFF"
        d="M280.5 86c6.617 0 11.5 4.883 11.5 11.5v60c0 6.617-4.883 12.5-11.5 12.5h-260C13.883 170 8 164.117 8 157.5v-60C8 90.883 13.883 86 20.5 86H280m.5-8h-260C9.454 78 0 86.454 0 97.5v60C0 168.546 9.454 178 20.5 178h260c11.046 0 19.5-9.454 19.5-20.5v-60c0-11.046-8.454-19.5-19.5-19.5z"
      />
      <path
        fill="#E1222C"
        d="M280.5 83c8.271 0 14.5 6.229 14.5 14.5v60c0 8.271-6.229 15.5-14.5 15.5h-260C12.229 173 5 165.771 5 157.5v-60C5 89.229 12.229 83 20.5 83H280m.5-5h-260C9.454 78 0 86.454 0 97.5v60C0 168.546 9.454 178 20.5 178h260c11.046 0 19.5-9.454 19.5-20.5v-60c0-11.046-8.454-19.5-19.5-19.5z"
      />
      <path
        fill="#FFF"
        d="M152.577 132.239h-7.813V162H134.72V93.643h10.044v28.273h7.813V93.643h10.044V162h-10.044v-29.761zM196.192 147.957c-.093 2.79-.651 5.301-1.674 7.44a12.796 12.796 0 01-3.999 5.022c-1.86 1.488-4.371 2.325-7.719 2.325s-5.952-.837-7.812-2.325c-1.86-1.395-3.069-3.162-3.906-5.022-1.023-2.139-1.581-4.65-1.674-7.44v-40.27c.093-2.697.651-5.208 1.674-7.347.837-1.86 2.046-3.72 3.906-5.115 1.86-1.395 4.464-2.325 7.812-2.325s5.859.93 7.719 2.325c1.86 1.395 3.162 3.255 3.999 5.115 1.023 2.139 1.581 4.65 1.674 7.347v40.27zm-10.044-40.27c0-1.86-.372-3.162-1.302-4.278-.465-.465-1.209-.744-2.046-.744-1.767 0-2.604 1.302-2.976 2.511-.279.744-.372 1.581-.372 2.511v40.27c0 1.953.465 3.255 1.395 4.278.465.465 1.116.744 1.953.744 1.767 0 2.604-1.116 2.976-2.511.279-.651.372-1.488.372-2.511v-40.27zM219.627 162l-6.417-42.967-.372-2.883h-.558V162h-9.3V93.643h12.276l5.952 31.249.465 3.627h.186l.465-3.627 5.952-31.249h12.276V162h-9.3v-45.85h-.558l-.372 2.883L223.905 162h-4.278zM247.992 93.643h22.971v10.324h-12.927v17.949h9.3v10.974h-9.3v18.787h12.927V162h-22.971V93.643z"
      />
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M112 83v90"
      />
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth={12}
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M25 128h66M25.302 127.698L51 102M25.302 128L51 153.697"
      />
      <path opacity={0.5} fill="#231F20" d="M70 77h17v1H70zM214 77h17v1h-17z" />
    </svg>
  )
}

export default SvgComponent;