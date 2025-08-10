"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaRss,
  FaLinkedinIn,
  FaOrcid,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <SocialLink href={socialLinks.googleScholar} icon={SiGooglescholar} />
      <SocialLink href={socialLinks.orcid} icon={FaOrcid} />
      <SocialLink href={socialLinks.researchGate} icon={SiResearchgate} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.name}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
