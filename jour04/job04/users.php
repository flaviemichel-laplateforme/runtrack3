<?php
header('Content-Type: application/json; charset=utf-8');

function connect_pdo()
{
    try {
       
        $pdo = new PDO("mysql:host=localhost;dbname=utilisateurs", "root", "");

        // Tu configures PDO pour qu’il envoie une exception si une erreur SQL survient
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
        
    } catch (PDOException $e) {
        // Si une erreur se produit (connexion ou requête), tu récupères le message d’erreur
        echo json_encode(['error' => 'Erreur de connexion : ' . $e->getMessage()]);
        exit;
    }
}

try {
    $pdo = connect_pdo();

    $sql = "SELECT id, nom, email FROM utilisateurs";
    $stmt = $pdo->prepare($sql);

    $stmt->execute();

    $users = $stmt->fetchAll();

    echo json_encode($users, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erreur SQL : ' . $e->getMessage()]);
    
}

