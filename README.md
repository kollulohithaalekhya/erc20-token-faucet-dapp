# ERC-20 Token Faucet DApp

A full-stack ERC-20 Token Faucet DApp with on-chain rate limiting, lifetime claim caps, admin controls, frontend wallet integration, and Dockerized production deployment.

---

## Features

- ERC-20 compliant token
- Faucet with:
  - 24h cooldown per address
  - Lifetime claim limit
  - Admin pause / unpause
  - Reentrancy protection
- Full Hardhat test suite
- Frontend wallet integration
- Mandatory `window.__EVAL__` interface
- Dockerized frontend with `/health` endpoint

---

## Tech Stack

- Solidity (0.8.20)
- Hardhat + Ethers v6
- React + Vite
- Docker + Nginx
- Sepolia / Localhost support

---

## Contracts

### Token.sol
- ERC-20 token
- Minting restricted to Faucet

### TokenFaucet.sol
- Enforces cooldown and lifetime cap
- Owner-controlled pause
- Emits claim events
- Uses `checks-effects-interactions`

---

## Local Setup

```bash
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network localhost
