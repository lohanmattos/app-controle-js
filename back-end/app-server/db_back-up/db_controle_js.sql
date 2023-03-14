-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Mar-2023 às 20:12
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_controle_js`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `departamento`
--

CREATE TABLE `departamento` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sigla` varchar(255) NOT NULL,
  `empresaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `departamento`
--

INSERT INTO `departamento` (`id`, `nome`, `sigla`, `empresaId`) VALUES
(1, 'TI', 'Pine', 1),
(2, 'TI', 'Pine', NULL),
(3, 'TI', 'Pine', NULL),
(4, 'TI', 'Pine', NULL),
(5, 'TI', 'Pine', NULL),
(6, 'TI', 'Pine', NULL),
(7, 'TI', 'Pine', NULL),
(8, 'TI', 'Pine', 1),
(9, 'TI', 'Pine', 1),
(10, 'TI', 'Pine', NULL),
(11, 'TI', 'Pine', NULL),
(12, 'TI', 'Pine', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `sigla` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `empresa`
--

INSERT INTO `empresa` (`id`, `nome`, `descricao`, `sigla`) VALUES
(1, 'P', 'L', 'pm'),
(2, 'P', 'L', 'pm'),
(3, 'P', 'L', 'pm'),
(4, 'P', 'L', 'pm'),
(5, 'P', 'L', 'pm'),
(6, 'P', 'L', 'pm'),
(7, 'Pineapple', 'Soluções em Tecnologia da Informação', 'Pine'),
(8, ' ', 'Soluções em Tecnologia da Informação', 'Pine'),
(9, '', 'Soluções em Tecnologia da Informação', 'Pine'),
(10, ' ', 'Soluções em Tecnologia da Informação', 'Pine'),
(11, ' ', 'Soluções em Tecnologia da Informação', 'Pine'),
(12, '', 'Soluções em Tecnologia da Informação', 'Pine');

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(2, 1678795781711, 'default1678795781711'),
(3, 1678795987985, 'default1678795987985'),
(4, 1678796398979, 'default1678796398979'),
(5, 1678815687279, 'default1678815687279'),
(6, 1678818688532, 'default1678818688532'),
(7, 1678818748747, 'default1678818748747');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_3b8766c84b1ebde7489a0261c5f` (`empresaId`);

--
-- Índices para tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `departamento`
--
ALTER TABLE `departamento`
  ADD CONSTRAINT `FK_3b8766c84b1ebde7489a0261c5f` FOREIGN KEY (`empresaId`) REFERENCES `empresa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
