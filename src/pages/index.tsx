import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import { Analytics } from '@vercel/analytics/react';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content="Junaid Nasir — software engineer building small, focused tools. Explore projects, preferences, and more via this interactive terminal." />
        <meta name="author" content="Junaid Nasir" />
        <meta property="og:title" content="Junaid Nasir" />
        <meta property="og:description" content="Interactive terminal portfolio — type commands to explore projects and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://junaidnasir.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Junaid Nasir" />
        <meta name="twitter:description" content="Interactive terminal portfolio — type commands to explore projects and more." />
        <link rel="canonical" href="https://junaidnasir.com" />
      </Head>

      <div className="p-2 sm:p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
          <Analytics />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
