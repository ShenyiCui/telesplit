import React, { useState } from "react";

const tabs = [{ name: "FRIENDS" }, { name: "GROUPS" }, { name: "ACTIVITY" }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [currentTab, setCurrentTab] = useState("FRIENDS");

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-greenBg">
      <div>
        <div className="flex items-center justify-center py-4">
          <h1 className="text-white text-xl	font-light">TELESPLIT</h1>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center h-16 w-16 rounded-full bg-white">
              <span className="text-[#4CBB9B] text-3xl">SC</span>
            </div>
            <span className="text-white text-xs">Shenyi Cui</span>
          </div>

          <div className="flex mx-5 py-2 bg-white rounded-md mt-4">
            <div className="w-full border-r-2 flex justify-center">
              <div>
                <dt className="truncate text-sm font-medium text-gray-500">
                  You Owe
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
                  $1,000.00
                </dd>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div>
                <dt className="truncate text-sm font-medium text-gray-500">
                  You Are Owed
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
                  $1,000.00
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full mt-5 w-full bg-white rounded-t-3xl">
        <div className="">
          <nav className="-mb-px flex justify-evenly" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                onClick={() => handleTabChange(tab.name)}
                className={classNames(
                  tab.name === currentTab
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 pt-4 pb-1 px-1 text-sm font-medium"
                )}
                aria-current={tab.name === currentTab ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
