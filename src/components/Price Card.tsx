import React from "react";

function PriceCard({
  cardHeading,
  cardPara,
  cardPrice,
  bulletColor,
  cardColor,
  cardBtnColor,
  cardTextColor,
  cardHeight,
  cardWidth,
}: {
  cardHeading: string;
  cardPara: string;
  cardPrice: number;
  bulletColor: string;
  cardColor: string;
  cardBtnColor: string;
  cardTextColor: string;
  cardHeight: string;
  cardWidth:string;
}) {
  return (
    <div
      className="w-[472px] rounded-lg border sm:px-11 px-5 py-10 space-y-8"
      style={{
        color: cardTextColor,
        backgroundColor: cardColor,
        height: cardHeight,
        width:cardWidth
      }}
    >
      <div className="space-y-6">
        <p className="font-semibold text-2xl leading-9">{cardHeading}</p>
        <h1 className="font-bold text-4xl" style={{ color: bulletColor }}>
          ${cardPrice}
        </h1>
        <p className="font-medium text-lg leading-[23px]">{cardPara}</p>
      </div>
      {/* BULLET POINTS */}
      <div className="space-y-7">
        <div className="h-[20px] flex items-center gap-[10px]">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0059 3.38986L10.0029 12.4018L7.30206 9.70091"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-normal text-base leading-5">
            Sync unlimited devices
          </p>
        </div>
        <div className="h-[20px] flex items-center gap-[10px]">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0059 3.38986L10.0029 12.4018L7.30206 9.70091"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-normal text-base leading-5">
            10 GB monthly uploads
          </p>
        </div>
        <div className="h-[20px] flex items-center gap-[10px]">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0059 3.38986L10.0029 12.4018L7.30206 9.70091"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-normal text-base leading-5">
            200 MB max. note size
          </p>
        </div>
        <div className="h-[20px] flex items-center gap-[10px]">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0059 3.38986L10.0029 12.4018L7.30206 9.70091"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-normal text-1xl leading-5">
            Customize Home dashboard and access extra widgets
          </p>
        </div>
        <div className="h-[20px] flex items-center gap-[10px]">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0059 3.38986L10.0029 12.4018L7.30206 9.70091"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-normal text-base leading-5">
            Connect primary Google Calendar account
          </p>
        </div>
        <div className="h-[20px] flex items-center gap-[10px]">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0059 3.38986L10.0029 12.4018L7.30206 9.70091"
              stroke={`${bulletColor}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-normal text-base leading-5">
            Add due dates, reminders, and notifications to your tasks
          </p>
        </div>
      </div>
      <button
        className={`border border-[#FFE492] bg-[${cardBtnColor}] rounded-lg w-[166px] h-[51px]`}
      >
        Get Started
      </button>
    </div>
  );
}

export default PriceCard;
