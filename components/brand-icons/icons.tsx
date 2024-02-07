import BashOn from '../../icons/bash.on.svg'
import BashOff from '../../icons/bash.off.svg'
import JavaOn from '../../icons/java.on.svg'
import JavaOff from '../../icons/java.off.svg'
import ProxmoxOn from '../../icons./../icons/proxmox.on.svg'
import ProxmoxOff from '../../icons./../icons/proxmox.off.svg'
import GitOn from '../../icons/git.on.svg'
import GitOff from '../../icons/git.off.svg'
import GithubOn from '../../icons/github.on.svg'
import GithubOff from '../../icons/github.off.svg'
import JavascriptOn from '../../icons/javascript.on.svg'
import JavascriptOff from '../../icons/javascript.off.svg'
import MarkdownOn from '../../icons/markdown.on.svg'
import MarkdownOff from '../../icons/markdown.off.svg'
import NextOn from '../../icons/nextjs.on.svg'
import NextOff from '../../icons/nextjs.off.svg'
import NodejsOn from '../../icons/nodejs.on.svg'
import NodejsOff from '../../icons/nodejs.off.svg'
import NpmOn from '../../icons/npm.on.svg'
import NpmOff from '../../icons/npm.off.svg'
import ReactOn from '../../icons/react.on.svg'
import ReactOff from '../../icons/react.off.svg'
import TypescriptOn from '../../icons/typescript.on.svg'
import TypescriptOff from '../../icons/typescript.off.svg'

export function Bash({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <BashOn className={className} />
  }

  return <BashOff className={className} />
}

export function Java({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <JavaOn className={className} />
  }

  return <JavaOff className={className} />
}

export function Proxmox({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <ProxmoxOn className={className} />
  }

  return <ProxmoxOff className={className} />
}

export function Git({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <GitOn className={className} />
  }

  return <GitOff className={className} />
}

export function Github({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <GithubOn className={className} />
  }

  return <GithubOff className={className} />
}
export function Javascript({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <JavascriptOn className={className} />
  }

  return <JavascriptOff className={className} />
}

export function Markdown({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <MarkdownOn className={className} />
  }

  return <MarkdownOff className={className} />
}

export function Next({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <NextOn className={className} />
  }

  return <NextOff className={className} />
}

export function Nodejs({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <NodejsOn className={className} />
  }

  return <NodejsOff className={className} />
}

export function Npm({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <NpmOn className={className} />
  }

  return <NpmOff className={className} />
}

export function React({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <ReactOn className={className} />
  }

  return <ReactOff className={className} />
}

export function TypeScript({ className, isOn }: { className?: string; isOn: boolean }) {
  if (isOn) {
    return <TypescriptOn className={className} />
  }

  return <TypescriptOff className={className} />
}

const Icons = {
  Bash,
  Java,
  Proxmox,
  Git,
  Github,
  Javascript,
  Markdown,
  Next,
  Nodejs,
  Npm,
  React,
  TypeScript,
}

export default Icons
