// I always like to define my resuable svgs in a single tsx file and reuse as many as possible

import clsx from "clsx";

interface SVGProps {
  className?: string;
  onClick?: () => void;
}

export const Email = ({ className }: SVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      className={clsx(className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M14.2 3H9.8C5.65164 3 3.57746 3 2.28873 4.31802C1 5.63604 1 7.75736 1 12C1 16.2426 1 18.364 2.28873 19.682C3.57746 21 5.65164 21 9.8 21H14.2C18.3484 21 20.4225 21 21.7113 19.682C23 18.364 23 16.2426 23 12C23 7.75736 23 5.63604 21.7113 4.31802C20.4225 3 18.3484 3 14.2 3Z"
        fill="#D30B49"
      />
      <path
        d="M19.1284 8.034C19.4784 7.74231 19.5257 7.22209 19.234 6.87206C18.9423 6.52204 18.4221 6.47474 18.0721 6.76643L15.6973 8.74542C14.671 9.60063 13.9585 10.1925 13.357 10.5794C12.7747 10.9539 12.3798 11.0796 12.0002 11.0796C11.6206 11.0796 11.2258 10.9539 10.6435 10.5794C10.0419 10.1925 9.32941 9.60063 8.30315 8.74542L5.92837 6.76643C5.57834 6.47474 5.05812 6.52204 4.76643 6.87206C4.47474 7.22209 4.52204 7.74231 4.87206 8.034L7.28821 10.0475C8.2632 10.86 9.05344 11.5185 9.75091 11.9671C10.4775 12.4344 11.185 12.7296 12.0002 12.7296C12.8154 12.7296 13.523 12.4344 14.2495 11.9671C14.947 11.5185 15.7372 10.86 16.7122 10.0474L19.1284 8.034Z"
        fill="#D30B49"
      />
    </svg>
  );
};

export function User({ className }: SVGProps) {
  return (
    <svg
      width="24"
      height="24"
      className={clsx(className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="#D30B49"
      />
      <path
        d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z"
        fill="#D30B49"
      />
      <path
        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z"
        fill="#D30B49"
      />
    </svg>
  );
}

export const Eyes = ({ className }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="114"
      height="100"
      className={className}
      viewBox="0 0 114 100"
      fill="none"
    >
      <g clipPath="url(#clip0_276_891)">
        <path
          d="M60.7401 30.0574C61.178 23.5913 62.4071 15.6232 68.0123 11.304C71.7414 8.43214 77.1232 7.59233 82.7807 8.99818C87.067 10.0606 91.0151 12.1782 94.1902 15.1088C103.484 23.7035 105.095 37.6394 106.519 49.943L106.626 50.9048C107.724 60.3516 109.224 69.8706 111.106 79.2063C111.301 80.1887 110.667 81.1514 109.676 81.3478C109.435 81.3934 109.211 81.3892 108.991 81.3475C108.987 81.376 108.983 81.4045 108.979 81.4331C108.798 82.1435 108.226 82.6498 107.547 82.7781C107.296 82.8254 107.035 82.819 106.774 82.7573C101.143 81.3463 95.4353 82.7665 89.3909 84.2687C85.5684 85.2218 81.6207 86.1986 77.6094 86.4462C77.1878 86.4701 76.7572 86.4958 76.3249 86.5126C73.6988 86.6377 71.2102 86.7553 69.6375 88.0435C69.4301 88.5644 68.9916 88.99 68.4079 89.1372C68.3631 89.1457 68.3274 89.1524 68.2826 89.1609C68.2826 89.1609 68.2826 89.1609 68.2737 89.1626C67.6929 89.3741 67.0116 89.2989 66.4966 88.8773C65.8825 88.3724 65.6824 87.5578 65.9382 86.8517C61.1867 68.2554 59.4349 49.1577 60.7401 30.0574Z"
          fill="white"
        />
        <path
          d="M12.5902 38.8408C13.2334 33.3644 14.2029 27.6039 16.9356 22.5947C20.0873 16.8115 25.2017 13.1316 30.6249 12.7565C38.3247 12.2203 44.8206 18.3134 47.8381 24.5813C50.9918 31.1292 51.5445 38.6221 52.0318 45.2286L55.3756 90.5787C55.4405 91.5115 54.7977 92.3277 53.9031 92.4965C53.8316 92.5101 53.7689 92.5219 53.6957 92.5264C52.9005 92.5839 52.202 92.1228 51.8969 91.4392C51.8236 91.4437 51.7431 91.4589 51.6682 91.4546C40.7858 90.7384 29.6192 92.1976 19.295 95.6658C19.3498 96.5448 18.7714 97.3582 17.8925 97.5611C16.9062 97.7843 15.938 97.1703 15.7075 96.1947C11.3912 77.3031 10.3433 58.0077 12.5919 38.8498L12.5902 38.8408Z"
          fill="white"
        />
        <path
          d="M68.2843 89.1698C68.2843 89.1698 68.3648 89.1547 68.4096 89.1462C69.3801 88.8889 69.9622 87.8989 69.7139 86.9266C64.874 68.4025 63.0753 49.3507 64.3727 30.3075C64.7596 24.6015 65.7762 17.6185 70.2344 14.1921C73.0829 12.0053 77.3319 11.3978 81.9103 12.5349C85.6036 13.4498 88.9943 15.265 91.7221 17.789C100.026 25.4587 101.488 38.1163 102.902 50.3663L103.009 51.3281C104.116 60.875 105.637 70.5014 107.538 79.9354C107.733 80.9178 108.669 81.5565 109.68 81.3657C110.662 81.171 111.304 80.2066 111.11 79.2242C109.227 69.8885 107.718 60.3712 106.629 50.9227L106.522 49.9609C105.095 37.6394 103.484 23.7035 94.1902 15.1088C91.0151 12.1782 87.067 10.0606 82.7807 8.99818C77.1232 7.59233 71.7324 8.43382 68.0123 11.304C62.4071 15.6232 61.1869 23.5896 60.7401 30.0574C59.4152 49.495 61.2507 68.9382 66.19 87.8419C66.4299 88.7694 67.3539 89.3455 68.2843 89.1698Z"
          fill="black"
        />
        <path
          d="M107.547 82.7783C108.226 82.6499 108.798 82.1437 108.979 81.4332C109.222 80.4609 108.627 79.4706 107.655 79.228C101.141 77.6039 94.724 79.1949 88.5114 80.7382C84.8483 81.652 81.0688 82.5877 77.3864 82.8103C76.9826 82.8309 76.5699 82.8532 76.1572 82.8755C72.6861 83.0396 68.7469 83.2273 66.2368 86.323C65.6052 87.1 65.7212 88.2548 66.4982 88.8863C67.2753 89.5179 68.421 89.4036 69.0616 88.6249C70.5509 86.7965 73.361 86.6645 76.3355 86.52C76.7678 86.5032 77.1984 86.4775 77.6201 86.4535C81.6313 86.206 85.5791 85.2292 89.4016 84.2761C95.4459 82.7739 101.145 81.3554 106.784 82.7646C107.046 82.8264 107.316 82.8311 107.557 82.7855L107.547 82.7783Z"
          fill="black"
        />
        <path
          d="M53.8958 92.507C54.7904 92.3381 55.4421 91.5202 55.3682 90.5892L52.0244 45.239C51.5372 38.6325 50.9845 31.1396 47.8308 24.5917C44.8133 18.3238 38.3174 12.2307 30.6176 12.7669C25.2033 13.1403 20.0889 16.8202 16.9372 22.6034C14.2046 27.6127 13.2351 33.3731 12.5918 38.8496C10.3433 58.0075 11.3912 77.3029 15.7074 96.1945C15.929 97.1718 16.9078 97.7931 17.8924 97.5609C18.8697 97.3394 19.4821 96.3622 19.2588 95.3759C15.0275 76.8852 14.0036 58.0114 16.2102 39.2691C16.8102 34.1528 17.7002 28.8058 20.136 24.3344C22.6555 19.7175 26.7685 16.6712 30.8748 16.3872C36.8466 15.9734 42.1524 21.1608 44.5604 26.1633C47.412 32.0919 47.9401 39.2095 48.4041 45.4961L51.7479 90.8463C51.8263 91.8507 52.6913 92.6046 53.6956 92.5262C53.7672 92.5127 53.8315 92.5098 53.9031 92.4963L53.8958 92.507Z"
          fill="black"
        />
        <path
          d="M52.1255 91.4224C52.9217 91.2721 53.545 90.5986 53.6078 89.7529C53.6776 88.7484 52.912 87.883 51.9075 87.8132C40.1901 87.0416 28.1502 88.6842 17.0967 92.5587C16.1502 92.8948 15.6515 93.934 15.9787 94.8821C16.3149 95.8285 17.345 96.3289 18.3021 96C28.9039 92.2849 40.4379 90.7101 51.677 91.4515C51.8359 91.4586 51.9913 91.4477 52.1345 91.4207L52.1255 91.4224Z"
          fill="black"
        />
        <path
          d="M64.6648 59.5393C64.3203 57.7143 63.9652 55.8821 63.6118 54.0588C63.4801 53.361 63.636 52.8127 63.9403 52.4125C63.7986 51.3182 63.6586 50.2328 63.5259 49.1368C63.4558 49.0111 63.3997 48.9105 63.3857 48.8853C62.8308 47.8598 62.2793 46.8521 62.0849 45.6751C61.9542 44.8844 61.9756 44.0651 62.1341 43.2847C60.1329 44.0701 58.6557 40.6616 60.6982 39.3588C68.98 34.0526 76.2597 44.1021 79.2635 51.1323C83.1642 60.263 84.1394 70.2888 85.017 80.0921C85.1871 82.0242 83.1916 82.9382 81.9756 82.2875C81.3599 83.2469 79.9074 83.6507 79.0178 82.8644C78.45 83.1939 77.7433 83.3273 76.8454 83.1354C76.7296 83.111 76.6535 83.0512 76.5449 83.0161C76.8328 85.6208 73.3559 86.1473 72.6225 83.636C72.5416 83.3548 72.4608 83.0736 72.3816 82.8014C72.3531 83.2885 72.305 83.7701 72.2195 84.2495C71.8872 86.0725 69.2997 87.089 68.4263 84.9654C65.0951 76.8389 65.8025 68.0706 64.6681 59.5572L64.6648 59.5393Z"
          fill="black"
        />
        <path
          d="M16.2587 90.9651C16.3775 87.9131 16.4409 84.8623 16.4758 81.8076C15.9157 79.2821 15.4898 76.7313 15.1982 74.1551C14.4565 74.0542 13.8015 73.5293 13.6716 72.4976C13.3627 70.0266 13.1807 67.541 13.1274 65.0495C13.1137 64.3387 13.4582 63.8568 13.9382 63.5531C13.9906 62.5055 14.0341 61.4597 14.1044 60.4087C13.8282 57.7185 13.7718 55.0145 13.9118 52.3198C13.5321 51.9283 13.1904 51.4924 12.9571 50.9435C12.1702 49.0816 12.6265 46.6885 12.7136 44.745C12.7704 43.6225 13.6996 42.9005 14.7124 42.8668C14.9681 42.5036 15.3284 42.2039 15.8814 42.0903C24.6172 40.3673 28.5669 51.2306 30.3051 58.231C32.7228 67.9474 33.2772 78.2472 34.4463 88.1715C34.6243 89.7036 33.4096 90.5815 32.2849 90.5621C31.7725 91.8725 30.0082 92.048 29.0508 91.0984C28.9151 91.263 28.79 91.4349 28.6241 91.5866C27.7319 92.3573 26.0729 92.2071 25.5435 90.9729C25.5195 91.0423 25.5241 91.1156 25.5001 91.185C25.1446 92.1971 23.9693 92.8914 22.9565 92.4341C22.7735 92.3482 22.6229 92.2376 22.4472 92.1411C22.2823 92.2 22.1246 92.2483 21.9597 92.3072C21.8898 92.3296 21.8524 92.3275 21.7987 92.3376C21.2912 93.5266 19.6338 94.2193 18.4132 93.0044C18.4927 93.082 18.5633 93.1614 18.6428 93.239C17.3436 93.6695 16.2115 92.1877 16.2514 90.9758L16.2587 90.9651Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_276_891">
          <rect
            width="98.5423"
            height="83.1657"
            fill="white"
            transform="matrix(-0.982649 0.185477 0.185476 0.982649 97.7036 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export function PlusIcon({ className }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width='40'
      // height='40'
      className={className}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M11.6667 20L20 20M20 20L28.3333 20M20 20V11.6667M20 20L20 28.3333"
        stroke="black"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MinusIcon({ className }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="24"
      // height="25"
      className={className}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M3 12.125C3 11.8266 3.11853 11.5405 3.3295 11.3295C3.54048 11.1185 3.82663 11 4.125 11H19.125C19.4234 11 19.7095 11.1185 19.9205 11.3295C20.1315 11.5405 20.25 11.8266 20.25 12.125C20.25 12.4234 20.1315 12.7095 19.9205 12.9205C19.7095 13.1315 19.4234 13.25 19.125 13.25H4.125C3.82663 13.25 3.54048 13.1315 3.3295 12.9205C3.11853 12.7095 3 12.4234 3 12.125Z"
        fill="black "
      />
    </svg>
  );
}
