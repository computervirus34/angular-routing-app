USE [master]
GO
/****** Object:  Database [ContactDb]    Script Date: 16/07/2025 17:43:49 ******/
CREATE DATABASE [ContactDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ContactDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\ContactDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ContactDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\ContactDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [ContactDb] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ContactDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ContactDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ContactDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ContactDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ContactDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ContactDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [ContactDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ContactDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ContactDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ContactDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ContactDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ContactDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ContactDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ContactDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ContactDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ContactDb] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ContactDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ContactDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ContactDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ContactDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ContactDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ContactDb] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [ContactDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ContactDb] SET RECOVERY FULL 
GO
ALTER DATABASE [ContactDb] SET  MULTI_USER 
GO
ALTER DATABASE [ContactDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ContactDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ContactDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ContactDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ContactDb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ContactDb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ContactDb', N'ON'
GO
ALTER DATABASE [ContactDb] SET QUERY_STORE = ON
GO
ALTER DATABASE [ContactDb] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [ContactDb]
GO
/****** Object:  User [appuser]    Script Date: 16/07/2025 17:43:49 ******/
CREATE USER [appuser] FOR LOGIN [appuser] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 16/07/2025 17:43:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ContactForms]    Script Date: 16/07/2025 17:43:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactForms](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Message] [nvarchar](max) NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_ContactForms] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Partners]    Script Date: 16/07/2025 17:43:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Partners](
	[PartnerId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[OrganizationCode] [nvarchar](20) NOT NULL,
	[CreatedAt] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[PartnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PartnerUsers]    Script Date: 16/07/2025 17:43:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PartnerUsers](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[PartnerId] [int] NULL,
	[FullName] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NULL,
	[PasswordHash] [nvarchar](255) NULL,
	[IsAdmin] [bit] NULL,
	[CreatedAt] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250714072908_Init', N'8.0.7')
GO
SET IDENTITY_INSERT [dbo].[ContactForms] ON 
GO
INSERT [dbo].[ContactForms] ([Id], [Name], [Email], [Message], [CreatedAt]) VALUES (1, N'Md. Ahsan Habib', N'dgmtreasury@krishibank.org.bd', N'hello
hi
test', CAST(N'2025-07-14T13:30:43.3788862' AS DateTime2))
GO
INSERT [dbo].[ContactForms] ([Id], [Name], [Email], [Message], [CreatedAt]) VALUES (2, N'ABC Test', N'corpkawranbazar@krishibank.org.bd', N'l''pl
l', CAST(N'2025-07-14T15:03:33.9270846' AS DateTime2))
GO
INSERT [dbo].[ContactForms] ([Id], [Name], [Email], [Message], [CreatedAt]) VALUES (3, N'ABC Test', N'ahsan34.07@gmail.com', N'Hi, Team this is the first job in angualr.', CAST(N'2025-07-15T12:04:48.2402577' AS DateTime2))
GO
SET IDENTITY_INSERT [dbo].[ContactForms] OFF
GO
SET IDENTITY_INSERT [dbo].[Partners] ON 
GO
INSERT [dbo].[Partners] ([PartnerId], [Name], [OrganizationCode], [CreatedAt]) VALUES (1, N'RIA Money Transfer', N'RIA', CAST(N'2025-07-16T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Partners] ([PartnerId], [Name], [OrganizationCode], [CreatedAt]) VALUES (2, N'CBL Money Exchange', N'CBL', CAST(N'2025-07-16T00:00:00.000' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Partners] OFF
GO
SET IDENTITY_INSERT [dbo].[PartnerUsers] ON 
GO
INSERT [dbo].[PartnerUsers] ([UserId], [PartnerId], [FullName], [Email], [PasswordHash], [IsAdmin], [CreatedAt]) VALUES (1, NULL, N'Super Admin', N'admin@krishibank.org.bd', N'$2a$11$o0ItApXu6xAo6gRtC4wNo.PcqPxg3B/OanZtrSaiWZUKGIvgVXRNi', 1, CAST(N'2025-07-15T17:24:09.470' AS DateTime))
GO
INSERT [dbo].[PartnerUsers] ([UserId], [PartnerId], [FullName], [Email], [PasswordHash], [IsAdmin], [CreatedAt]) VALUES (2, 1, N'RIA', N'admin@ria.org', N'$2a$11$vYYv5gdUC6xUL.tjVxh0i.l1cXP/hc1XyrwF6VkT1BodKtNphwg8S', 1, CAST(N'2025-07-16T10:36:00.867' AS DateTime))
GO
INSERT [dbo].[PartnerUsers] ([UserId], [PartnerId], [FullName], [Email], [PasswordHash], [IsAdmin], [CreatedAt]) VALUES (3, NULL, N'user test', N'userria@org.bd', N'$2a$11$EZf0ZITFyAAIgbzepvoHr.qKS/cSpPSD4eFMQ7wk4bamwRcKZu7va', 0, CAST(N'2025-07-16T11:29:43.667' AS DateTime))
GO
INSERT [dbo].[PartnerUsers] ([UserId], [PartnerId], [FullName], [Email], [PasswordHash], [IsAdmin], [CreatedAt]) VALUES (4, NULL, N'user test', N'userria@ria.org.bd', N'$2a$11$rh5ONlkfHJPtyU.esKaZo.zVfrdGDKJPnpLTIirCPVrE0bsMaFZNG', 0, CAST(N'2025-07-16T11:31:38.007' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[PartnerUsers] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Partners__61B3792CEF9418FC]    Script Date: 16/07/2025 17:43:49 ******/
ALTER TABLE [dbo].[Partners] ADD UNIQUE NONCLUSTERED 
(
	[OrganizationCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__PartnerU__A9D10534FA3EC5EB]    Script Date: 16/07/2025 17:43:49 ******/
ALTER TABLE [dbo].[PartnerUsers] ADD UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Partners] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[PartnerUsers] ADD  DEFAULT ((0)) FOR [IsAdmin]
GO
ALTER TABLE [dbo].[PartnerUsers] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[PartnerUsers]  WITH CHECK ADD FOREIGN KEY([PartnerId])
REFERENCES [dbo].[Partners] ([PartnerId])
GO
USE [master]
GO
ALTER DATABASE [ContactDb] SET  READ_WRITE 
GO
